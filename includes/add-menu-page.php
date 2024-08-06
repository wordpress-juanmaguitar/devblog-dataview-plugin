<?php

namespace DevBlogDataviewsExample;

/**
 * Create a new admin page.
 *
 * @return void
 */
function my_admin_menu() {
	add_menu_page(
		__( 'My custom Dataview app', 'dev-blog-dataviews-example' ),
		__( 'My custom Dataview app', 'dev-blog-dataviews-example' ),
		'manage_options',
		'my-custom-dataview-app',
		function () {
			echo '<h2>Dataview</h2><div id="my-custom-dataview-app"></div>';
		},
		'dashicons-schedule',
		3
	);
}
