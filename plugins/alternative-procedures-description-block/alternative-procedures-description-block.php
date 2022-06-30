<?php
/**
 * Plugin Name:       Alternative Procedures Description
 * Description:       Will the ICF present alternative procedures or courses of treatment should the patient elect not to enroll?
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       alternative-procedures-description-block
 *
 * @package           consent-form-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function consent_form_block_alternative_procedures_description_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'consent_form_block_alternative_procedures_description_block_block_init' );
