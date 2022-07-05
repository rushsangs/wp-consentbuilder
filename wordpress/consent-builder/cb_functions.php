<?php
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
    $tmp_folder_name = "/tmp_" + $post_id + "_" + ((string) $i); 
    while(is_dir(__DIR__.$tmp_folder_name)){
        $i +=1;
        $tmp_folder_name = "/tmp_" + $post_id + "_" + ((string) $i);
    }
    mkdir(__DIR__.$tmp_folder_name);
    


    foreach($nodes as $node) {
        write_log("node is :");
        write_log($node);
        $block = $node->attributes->getNamedItem("class");
        write_log($block);
        $inner_html = DOMinnerHTML($node);
        $markdown_text = getScaffolding($block, $inner_html);
    }
}

function getScaffolding($block, $content){
    $scaffolding = "";
    switch ($block) {
        case "wp-block-create-block-race-ethnicity-block":
            $scaffolding = $content;
            break;
        default:
            break;
    }
    return $scaffolding;
}

/**
 * Replaces a string in a file
 *
 * @param string $FilePath
 * @param string $OldText text to be replaced
 * @param string $NewText new text
 * @return array $Result status (success | error) & message (file exist, file permissions)
 */
function replace_in_file($FilePath, $OldText, $NewText)
{
    $Result = array('status' => 'error', 'message' => '');
    if(file_exists($FilePath)===TRUE)
    {
        if(is_writeable($FilePath))
        {
            try
            {
                $FileContent = file_get_contents($FilePath);
                $FileContent = str_replace($OldText, $NewText, $FileContent);
                if(file_put_contents($FilePath, $FileContent) > 0)
                {
                    $Result["status"] = 'success';
                }
                else
                {
                   $Result["message"] = 'Error while writing file';
                }
            }
            catch(Exception $e)
            {
                $Result["message"] = 'Error : '.$e;
            }
        }
        else
        {
            $Result["message"] = 'File '.$FilePath.' is not writable !';
        }
    }
    else
    {
        $Result["message"] = 'File '.$FilePath.' does not exist !';
    }
    return $Result;
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