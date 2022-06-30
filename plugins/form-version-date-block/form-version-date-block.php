<?php
/**
 * Plugin Name:       Consent Form Version Date
 * Description:       This option allows you to specify a consent document version date for your consent form to be indicated next to the consent form version number.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       form-version-date-block
 *
 * @package           consent-form
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function consent_form_form_version_date_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'consent_form_form_version_date_block_block_init' );
