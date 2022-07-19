<?php
/*
Plugin Name: Sidebar Preview PDF
*/

/**
 * Enqueue block editor assets for this example.
 */
function prefix_enqueue_assets() {
	wp_enqueue_script( 
		'sidebar-preview', 
	plugins_url('build/index.js', __FILE__),
	['wp-plugins', 'wp-edit-post', 'wp-i18n','wp-element','wp-components','wp-data']);
}
add_action( 'enqueue_block_editor_assets', 'prefix_enqueue_assets' );

// Register metaboxes
function prefix_register_meta_fields() {
	register_meta(
		'post',
		'prefix_text_field',
		[
			'show_in_rest' => true,
			'type' => 'string',
			"default" => "http://155.98.13.238:8765/consent-builder/tmp_54_11/cb.pdf",
			'single' => true,
			'sanitize_callback' => 'sanitize_text_string',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts');
			}
		]
		);
}
add_action('init', 'prefix_register_meta_fields');

add_action('post_updated', 'consentbuilder_update_preview_link', 10, 3);
