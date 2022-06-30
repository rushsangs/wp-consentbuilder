<?php
/**
 * Plugin Name:       The ICF must include a concise and focused presentation of key information including: Add these required elements below:
 * Description:       A statement that participation in the research study is voluntary Purpose of the study A high-level description of the study (number of study centers, number of subjects, masking, duration) A brief description of the key efficacy, effectiveness and safety endpoints
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       study-summary-block
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
function consent_form_block_study_summary_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'consent_form_block_study_summary_block_block_init' );
