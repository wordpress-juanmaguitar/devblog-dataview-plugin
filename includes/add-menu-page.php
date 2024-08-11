<?php

namespace DevBlogDataviewsExample;

/**
 * Create a new admin page.
 *
 * @return void
 */
function my_admin_menu() {
	add_media_page(
		__( 'Add Media from third party service', 'dev-blog-dataviews-example' ),
		__( 'Add Media from third party service', 'dev-blog-dataviews-example' ),
		'manage_options',
		'my-custom-dataview-app',
		function () {
			echo '<h2>Add Media from third party service</h2><div id="my-custom-dataview-app"></div>';
		}
	);
}
