<?php
// FILE SPECIFICATIONS

// this is the target output latex file.
$OutputLatexFileName = 'cb.tex';

// This is the file containing the preamble -- everything
// up to and including the begin{document}
$PreambleFileName = 'preamble.tex';

// This has the title info from the page body.
$BodyLatexFileName = 'title_info.tex';
////////////////

if ( ! function_exists('write_log')) {
	function write_log ( $log )  {
	   if ( is_array( $log ) || is_object( $log ) ) {
		  error_log( print_r( $log, true ) );
	   } else {
		  error_log( $log );
	   }
	}
 }

function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}
function consentbuilder_update_post($post_id, $new, $old) {
	global $OutputLatexFileName, $PreambleFileName, $BodyLatexFileName;
    write_log("cb update begin");
	// write_log($old);
	// $post = get_post($post_id);
    $content = $new->post_content; 
	write_log($content);
    $dom = new DOMDocument();
    $dom->loadHTML($content);
    $xpath = new DOMXPath($dom);
    $nodes = $xpath->query("/html/body/*");

    // create temp folder
    $i = 1;
    $tmp_folder_name = "/tmp_" . $post_id . "_" . ((string) $i); 
    while(is_dir(__DIR__.$tmp_folder_name)){
        $i +=1;
        $tmp_folder_name = "/tmp_" . $post_id . "_" . ((string) $i);
    }
    mkdir(__DIR__.$tmp_folder_name);
    $tmp_folder_name = __DIR__. $tmp_folder_name;
    // this is the target output latex file.
    $local_OutputLatexFileName = $tmp_folder_name.'/'. $OutputLatexFileName;
    
    // copy files into the temp folder
    copy(__DIR__."/".$PreambleFileName, $tmp_folder_name."/".$PreambleFileName);
    copy(__DIR__."/".$BodyLatexFileName, $tmp_folder_name."/".$BodyLatexFileName);
    

    $local_BodyLatexFileName = $tmp_folder_name . "/". $BodyLatexFileName;
    $local_PreambleFileName = $tmp_folder_name . "/" . $PreambleFileName;

    $LATEX_Output = initialize_LATEX($local_PreambleFileName, $local_BodyLatexFileName);
    
    // goes through and sets all the global elements of the consent form
    // by replacing the values they're set to in the default latex template.
    $LATEX_Output = handle_global_elements($dom, $LATEX_Output);   
    
    // Go thropugh the DOM in order, adding to the $LATEX_Output variable
    // as we go.

    foreach($nodes as $node) {
        write_log("node is :");
        write_log($node);
        $block = $node->attributes->getNamedItem("class");
        $inner_html = DOMinnerHTML($node);
        $inner_html = replace_all_text_markups($inner_html);
        $LATEX_Output = $LATEX_Output . handleBlock($block, $inner_html);
    }
    $LATEX_Output = finalize_LATEX($LATEX_Output);
    
    write_LATEX($local_OutputLatexFileName,$LATEX_Output);

    exec('pdflatex -interaction=nonstopmode -output-directory ' .$tmp_folder_name. " ". $local_OutputLatexFileName, $output, $return);
    array_push($output, "test");
    write_log("Error code is " . (string)$return );
    write_log($output);

    register_meta(
		'post',
		'prefix_text_field',
		[
			'show_in_rest' => true,
			'type' => 'string',
			"default" => "http://155.98.13.238:8765/consent-builder/tmp_" . (string)$post_id . "_" . (string)$i . "/cb.pdf",
			'single' => true,
			'sanitize_callback' => 'sanitize_text_string',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts');
			}
		]
		);

}

function handleBlock($block, $content){
    $scaffolding = "";
    write_log("handling block type ".$block->value);
    switch ($block->value) {
       case "cb_summary":
            $scaffolding = handle_summary_element($content);
            break;
        case "cb_study-background":
            $scaffolding = handle_study_background_element($content);
            break;
        case "cb_number-of-participants":
            $scaffolding = handle_number_of_participants_element($content);
            break;
        case "cb_study-procedures":
            $scaffolding = handle_study_procedures_element($content);
            break;
        case "cb_table":
            $scaffolding = handle_table_element($content);
            break;
        case "wp-block-create-block-participation-of-patient-block":
            $scaffolding = handle_participation_of_patient_element($content);
            break;
        case "wp-block-create-block-race-ethnicity-block":
            $scaffolding = handle_race_ethnicity_element($content);
            break;
        default:
            break;
    }
    return $scaffolding;
}

function DOMinnerHTML(DOMNode $element) 
{ 
    $innerHTML = ""; 
    $children  = $element->childNodes;

    foreach ($children as $child) 
    { 
        $innerHTML .= $element->ownerDocument->saveHTML($child);
    }

    return $innerHTML; 
} 

function createFile($name, $path) {
    $file = fopen("$name", "w");
}

function writeTOFile($file, $content) {
    fwrite($file, $content);
}

function closeFile($file) {
    fclose($file);
}
function initialize_LATEX($PreambleFileName, $BodyLatexFileName) {
  
  return "%% generated on ".date("D M d, Y G:i")."\n".file_get_contents($PreambleFileName).file_get_contents($BodyLatexFileName);

}

///////////////////

function handle_header($doc, $LATEX_Output){
  $headers = $doc->getElementsByTagName('cb_header');
  $header = $headers[0]->nodeValue;
  $LATEX_Output = str_replace('cb_header_target',$header,$LATEX_Output);
}



function handle_study_title($doc, $LATEX_Output){
    $finder = new DomXPath($doc);
    $classname='wp-block-consent-form-study-title';
    $title = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]")[0]->nodeValue;
    $LATEX_Output = str_replace('$$study_name$$',$title,$LATEX_Output);
    return $LATEX_Output;
  
}

function handle_source_of_support($doc, $LATEX_Output){
    $finder = new DomXPath($doc);
    $classname='wp-block-consent-form-block-source-of-support-block';
    $title = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]")[0]->nodeValue;
    $LATEX_Output = str_replace('$$support_source$$',$title,$LATEX_Output);
    return $LATEX_Output;
  
}

function handle_version_date($doc, $LATEX_Output){
    $finder = new DomXPath($doc);
    $classname='wp-block-consent-form-form-version-date-block';
    $title = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]")[0]->nodeValue;
    $LATEX_Output = str_replace('$$consent_version_date$$',$title,$LATEX_Output);
    return $LATEX_Output;
  
}


function handle_IRB_number($doc, $LATEX_Output){
    $finder = new DomXPath($doc);
    $classname='wp-block-consent-form-block-study-title-protocol-number-block';
    $IRBs = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");

  
    write_log('Getting IRB '.$IRBs[0]->nodeValue);
    $IRB_number = $IRBs[0]->nodeValue;
    $LATEX_Output = str_replace('cb_IRB_target',$IRB_number,$LATEX_Output);
    return $LATEX_Output;

}

function handle_global_elements($doc, $LATEX_Output){

  handle_header($doc, $LATEX_Output);

  $LATEX_Output = handle_IRB_number($doc, $LATEX_Output);

  $LATEX_Output = handle_study_title($doc, $LATEX_Output);

  $LATEX_Output = handle_study_short_title($doc, $LATEX_Output);
  
  $LATEX_Output = handle_version_date($doc, $LATEX_Output);

  $LATEX_Output = handle_source_of_support($doc, $LATEX_Output);

  // handle_doc_title($doc);

  $LATEX_Output =  handle_doc_logo($doc, $LATEX_Output);

  // add any other global properties and settings below here.
  return $LATEX_Output;
  
}

function  handle_summary_element($content){


  // how do we get the value of the element again?
  // I think this is right
  return $content;  
  
}
function handle_participation_of_patient_element($content){
    $content = "\section{Participation of Patient}\n" . $content ."\n\n";
    return $content;
}

function handle_race_ethnicity_element($content){
    $content = "\section{Race and Ethnicity Statement}\n" . $content ."\n\n";
    return $content;
}

function handle_doc_logo($doc, $LATEX_Output){
    $finder = new DomXPath($doc);
    $classname='wp-block-create-block-short-study-title';
    $IRBs = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");
    //   echo 'Getting IRB '.$IRBs[0]->nodeValue, PHP_EOL;
    $IRB_number = $IRBs[0]->nodeValue;
    $LATEX_Output = str_replace('cb_header_target',$IRB_number,$LATEX_Output);
    return $LATEX_Output;
}

function handle_study_short_title($doc, $LATEX_Output){
    $finder = new DomXPath($doc);
    $classname='wp-block-create-block-short-study-title';
    $IRBs = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");
    //   echo 'Getting IRB '.$IRBs[0]->nodeValue, PHP_EOL;
    $IRB_number = $IRBs[0]->nodeValue;
    $LATEX_Output = str_replace('cb_header_target',$IRB_number,$LATEX_Output);
    return $LATEX_Output;
}

function  handle_study_background_element($content){

    return $content;
  
}

function  handle_number_of_participants_element($content){
    return $content;

}

function  handle_study_procedures_element($content){
    return $content;
}

function handle_inline_image($content){
    return $content;
}

function  handle_table_element($elem){

  
   return "\n"."\\newline\n"."\textbf{Omitted table here."."\n"."\\newline\n";
  
}

function replace_all_text_markups($str){

  // change all open bold font tags
  $str = str_replace("<b>", "\\textbf{",$str);
  $str = str_replace("<strong>", "\\textbf{",$str);
  // change all close bold font tags
  $str = str_replace("</b>", "}",$str);
  $str = str_replace("</strong>", "}",$str);
  // change all open italic font tags
  $str = str_replace("<i>", "\\textit{",$str);
  $str = str_replace("<em>", "\\textit{",$str);

  // change all close italic font tags
  $str = str_replace("</i>", "}",$str);
  $str = str_replace("</em>", "}",$str);

  // change all open itemize tags
  $str = str_replace("<ul>", "\\begin{itemize} ",$str);
    // change all close itemize tags
  $str = str_replace("</ul>", "\\end{itemize} ",$str);

    // change all open itemize tags
  $str = str_replace("<ol>", "\\begin{enumerate} ",$str);
    // change all close itemize tags
  $str = str_replace("</ol>", "\\end{enumerate} ",$str);
  
    
  $str = str_replace("<li>", "\\item ",$str);
  $str = str_replace("</li>", "",$str);

  // here is where we would add setting larger and small fonts, and doing
  // super and subscripts, if we wanted to support that.


  return $str;
}

function finalize_LATEX($string){
  // double backslash needed to quote it within a string -RMY
  return $string."\\end{document}"."\n";
}

function write_LATEX($filename, $content){
//   echo"\n";
//   echo "Latex Content is: \n";
//   echo $content;
//   error_log("Latex Content is " . $content);
//   echo "\n";
//   echo 'Writing file: '.$filename."\n";
  error_log('Writing file: '.$filename."\n");
  $myfile = fopen($filename, "w+")  ;
  fwrite($myfile, $content);
  fclose($myfile);
}