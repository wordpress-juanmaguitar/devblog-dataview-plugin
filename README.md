# Dataview Plugin

[![](https://img.shields.io/badge/playground-live%20preview-blue?logo=wordpress)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/wordpress-juanmaguitar/devblog-dataview-plugin/main/_playground/blueprint.json)

An exploration of using the Dataview component inside of a plugin

## Development

1. Set up a local WordPress development environment.
2. Clone / download this repository into the `wp-content/plugins` folder.
3. Navigate to the `wp-content/plugins/devblog-dataview-plugin` folder in the command line.
4. Run `npm install` to install the plugin's dependencies within a `/node_modules/` folder.
5. Run `composer install` to install the additional WordPress composer tools within a `/vendor/` folder.
6. Run `npm run start` to compile and watch source files for changes while developing.
7. Login to your local WordPress development environment, navigate from _Dashboard > Plugins_ and activate _"Developer Blog: Dataviews Example"_

Refer to `package.json` and `composer.json` for additional commands.
