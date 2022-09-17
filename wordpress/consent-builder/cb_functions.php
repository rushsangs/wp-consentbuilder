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
function consentbuilder_update_post($post_id, $new) {
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
    copy(__DIR__.'/UHealthhorizontalpngred.png', $tmp_folder_name. '/UHealthhorizontalpngred.png');
    

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
        $LATEX_Output = $LATEX_Output . handleBlock($block, $inner_html, $node);
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

function handleBlock($block, $content, $node){
    $scaffolding = "";
    write_log("handling block type ".$block->value . " content is " . $content);
    switch ($block->value) {
       case "wp-block-consent-form-block-study-summary-block":
            $scaffolding = handle_summary_element($content);
            break;
        case "wp-block-consent-form-block-study-backgroun-block":
            $scaffolding = handle_study_background_element($content);
            break;
        case "wp-block-create-block-number-of-participants-block":
            $scaffolding = handle_number_of_participants_element($content);
            break;
        case "cb_study-procedures":
            $scaffolding = handle_study_procedures_element($content);
            break;
        case "wp-block-table":
            $scaffolding = handle_table_element($node);
            break;
        case "wp-block-create-block-participation-of-patient-block":
            $scaffolding = handle_participation_of_patient_element($content);
            break;
        case "wp-block-create-block-race-ethnicity-block":
            $scaffolding = handle_race_ethnicity_element($content);
            break;
        case 'wp-block-create-block-benefits-block':
            $scaffolding = handle_benefits_element($content);
            break;
        case  "wp-block-create-block-risks-block":
            $scaffolding = handle_risks_element($content);
            break;
        case  "wp-block-create-block-consent-signature-block":
            $scaffolding = handle_consent_signature($content);
            break;
        case 'wp-block-create-block-new-information-block':
            $scaffolding = handle_new_info($content);
            break;
        case 'wp-block-image size-full':
            $scaffolding = handle_image_element($node);
            break;
        default:
            $scaffolding = $content;
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
    $content = "\n\section{SUMMARY}\n" . $content ."\n\n";
    return $content;
}
function handle_participation_of_patient_element($content){
    $content = "\n\section{PARTICIPATION OF PATIENT}\n" . $content ."\n\n";
    return $content;
}

function handle_risks_element($content){
    $content = "\n\section{RISKS}\n" . $content ."\n\n";
    return $content;
}


function handle_race_ethnicity_element($content){
    $content = "\n\section{RACE AND ETHNICITY STATEMENT}\n" . $content ."\n\n";
    return $content;
}
function handle_benefits_element($content){
    $content = "\n\section{BENEFITS}\n" . $content ."\n\n";
    return $content;
}

function handle_new_info($content){
    $content = "\n\section{NEW INFORMATION}\n" . $content ."\n\n";
    return $content;
}

function handle_consent_signature($content){
    if($content=='')
        $content = "Participant";
    $res = "\n\section{CONSENT:}

    I confirm that I have read this consent document and have had the opportunity to ask questions.
    I will be given a signed copy of the consent form to keep.
    
    \\textbf{I agree to take part in this research study as you have explained in this document.}
    
    \ \\
    \ \\
    
    
    \Sig{".$content . "'s Name}
    
    \ifthenelse{\boolean{time_of_consent}}%
    {%
    \SigDateTime{" .$content ."'s Signature}
    }%
    {%
    \SigDate{" .$content ."'s Signature}
    }%
    
    \Sig{Name of Person Obtaining Consent}
    
    \ifthenelse{\boolean{time_of_consent}}%
    {%
    \SigDateTime{Signature of Person Obtaining Consent}
    }%
    {%
    \SigDate{Signature of Person Obtaining Consent}
    }%
    
    \\newpage
    }";
    return $res;
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
    $content = "\section{STUDY BACKGROUND}\n" . $content ."\n\n";
    return $content;
  
}

function  handle_number_of_participants_element($content){
    $content = "\section{NUMBER OF PARTICIPANTS}\n" . $content ."\n\n";
    return $content;

}

function  handle_study_procedures_element($content){
    return $content;
}

// <!-- wp:image {"align":"center","id":60,"sizeSlug":"large","linkDestination":"none"} -->
//<figure class="wp-block-image aligncenter size-large"><img src="http://155.98.13.238:8765/wp-content/uploads/2022/06/UHealthhorizontalpngred-1024x269.png" alt="" class="wp-image-60"/></figure>
// <!-- /wp:image -->

function trimImageName($img_name){
    $bits = explode("/", $img_name);
    // echo print_r($bits);
    $res = implode("/", array_slice($bits, 3));
    // echo $res;
    $res = __DIR__."/../".$res;
    return $res;
}
  
  function getImageName($image_element){
    // once I know better what the structure of the image block will be,
    // I can figure out how to extract the file name from it.
  
    $img = $image_element->getElementsByTagName('img');
    write_log($img[0]->getAttribute('src'));
    return trimImageName($img[0]->getAttribute('src'));
  }
  
  function handle_image_element($elem){
    // assumes that the image file is already in the \graphicspath directory,
    // so maybe some pre-processing will have to happen to look through the post-content
    // for image references, then pull the files corresponding to those images
    // from the WP database and create a /images subdirectory below the project's
    // latex source file home dir, then save all the images into that /images directory
    // using their correct filenames.
  
  
    $LATEX_Output = '';
      
    $image_name = getImageName($elem);
    // also want to center this, I think, as a starting default
    $LATEX_Output = $LATEX_Output."\n\\begin{center}\\includegraphics[width=\\textwidth]{".$image_name."}\n\\end{center}\n";
    return $LATEX_Output;
  }  

function handle_table_row($row, $LATEX_Output){
    foreach ($row->childNodes as $td){
      write_log($row);
      write_log('Processing a table data in a row: ');
      write_log($td->nodeValue."\n");
      //  echo $item->nodeValue;
      if ($td->nodeType == 1){
        $LATEX_Output = $LATEX_Output.$td->nodeValue.' & ';
      }
    }
    // trims off the last added & and writes out the newline and the \hline
    $LATEX_length = strlen($LATEX_Output) - 3;
    if ($LATEX_Output[$LATEX_length + 1] == '&'){
      $LATEX_Output = substr($LATEX_Output,0,$LATEX_length)." \\\\ \n\\hline \n";
    }
    return $LATEX_Output;
  }
  function compute_column_spec($elem){
    // this needs to determine the number of <td> elements in a <tr> element,
    // and then, if we are allowing it, find the column-specific attribute and
    // translate that into l, c or r, on a per-column basis.
    // echo 'BOLA\n';
    // echo $elem->C14N();
    $col_count = 0;
    $trs = $elem->getElementsByTagName('tr');
    foreach ($trs as $row){
      $td = $row->getElementsByTagName('td');
      $col_count = max($td->length, $col_count);
    }
    // echo 'columns = '.$col_count.'\n';
    $column_spec = '{|';
    for ($x = 0; $x <= $col_count-1; $x++) {
      $column_spec = $column_spec.' c |';
    }
    return $column_spec.'}';
  }

  function getPositionFromTable($table){
    return array('\\begin{center}','\\end{center}');
  }

  function  handle_table_element($elem){
    $LATEX_Output = '';
    //<figcaption>caption text</figcaption>

    $captions = $elem->getElementsByTagName('figcaption');

    if ($captions->length != 0) {
      write_log($captions[0]);    
      $caption = "\\caption{".$captions[0]->textContent."}\\n";}
    else {
      $caption = "";
    }
    
    $position = getPositionFromTable($elem);
    
    // determine number of columns

    $column_spec = compute_column_spec($elem);

    $LATEX_Output = $LATEX_Output."\n".$position[0]."\n\\begin{table}[h]\\centering\n".'\begin{tabular}'.$column_spec."\n\\hline\n";
    $trs = $elem->getElementsByTagName('tr');
    foreach ($trs as $row){
      $LATEX_Output= handle_table_row($row, $LATEX_Output);
    }

    $LATEX_Output = $LATEX_Output.'\end{tabular}'."\n".$caption."\\end{table}\n".$position[1]."\n";
    write_log($LATEX_Output);
    return $LATEX_Output;
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

  $str = str_replace("<br>", "    \\\\", $str);

  if(str_contains($str, "\\item")){
    $str = "\\begin{itemize}" . $str . "\\end{itemize}";  
  }

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