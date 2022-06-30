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
	// console_log($data);
}