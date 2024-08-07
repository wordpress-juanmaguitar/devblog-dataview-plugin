<?php
namespace DevBlogDataviewsExample;

/**
 * Load the admin script.
 *
 * @param string $hook The hook name of the page.
 */
function load_custom_wp_admin_scripts( $hook ) {
	// Load only on ?page=my-custom-dataview-app.
	if ( 'toplevel_page_my-custom-dataview-app' !== $hook ) {
		return;
	}

	$asset_file = PLUGIN_DIR . 'build/index.asset.php';

	if ( ! file_exists( $asset_file ) ) {
		return;
	}

	$asset = include $asset_file;

	wp_enqueue_script(
		'devblog-dataview-script',
		PLUGIN_DIR_URL . 'build/index.js',
		$asset['dependencies'],
		$asset['version'],
		array(
			'in_footer' => true,
		)
	);

	wp_enqueue_style( 'wp-components' );

	wp_enqueue_style(
		'dataview-styles',
		PLUGIN_DIR_URL . 'build/dataviews-style.css'
	);
}
