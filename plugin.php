<?php
/**
 * Plugin Name: Developer Blog: Dataviews Example
 * Description: A companion plugin for a WordPress Developer Blog article.
 * Version: 1.0.1
 * Requires at least: 6.1
 * Requires PHP: 7.4
 * Author: JuanMa Garrido
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain: dev-blog-dataviews-example
 */

defined( 'ABSPATH' ) || exit;

add_action( 'admin_menu', 'devblog_dataviews_admin_menu' );

/**
 * Creates a new Media subsection and set the HTML for it.
 */
function devblog_dataviews_admin_menu() {
	add_media_page(
		__( 'Add Media from third party service', 'dev-blog-dataviews-example' ),
		__( 'Add Media from third party service', 'dev-blog-dataviews-example' ),
		'manage_options',
		'add-media-from-third-party-service',
		function () {
			printf(
				'<h2>%s</h2><div id="add-media-from-third-party-service"></div>',
				esc_html__( 'Add Media from third party service', 'dev-blog-dataviews-example' )
			);
		}
	);
}

add_action( 'admin_enqueue_scripts', 'devblog_dataviews_admin_enqueue_assets' );

/**
 * Enqueues JS and CSS files for our custom Media subsection page.
 *
 * @param string $hook_suffix The current admin page.
 */
function devblog_dataviews_admin_enqueue_assets( $hook_suffix ) {
	// Load only on ?page=my-custom-dataview-app.
	if ( 'media_page_add-media-from-third-party-service' !== $hook_suffix ) {
		return;
	}

	$dir = plugin_dir_path( __FILE__ );
	$url = plugin_dir_url( __FILE__ );

	$asset_file = $dir . 'build/index.asset.php';

	if ( ! file_exists( $asset_file ) ) {
		return;
	}

	$asset = include $asset_file;

	wp_enqueue_script(
		'devblog-dataview-script',
		$url . 'build/index.js',
		$asset['dependencies'],
		$asset['version'],
		array(
			'in_footer' => true,
		)
	);

	wp_enqueue_style(
		'devblog-dataview-styles',
		$url . 'build/style-index.css',
		array( 'wp-components' ),
		$asset['version'],
	);
}
