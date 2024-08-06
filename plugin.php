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

// Setup.
if ( ! defined( 'PLUGIN_DIR' ) ) {
	define( 'PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}
if ( ! defined( 'PLUGIN_FILE' ) ) {
	define( 'PLUGIN_FILE', __FILE__ );
}

if ( ! defined( 'PLUGIN_DIR_URL' ) ) {
	define( 'PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );
}

require_once PLUGIN_DIR . 'includes/add-menu-page.php';
require_once PLUGIN_DIR . 'includes/load-custom-admin-scripts.php';

add_action( 'admin_menu', 'DevBlogDataviewsExample\my_admin_menu' );
add_action( 'admin_enqueue_scripts', 'DevBlogDataviewsExample\load_custom_wp_admin_scripts' );
