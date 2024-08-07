const CopyPlugin = require("copy-webpack-plugin");

// WordPress webpack config.
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// Utilities.
const path = require("path");

// Add any a new entry point by extending the webpack config.
module.exports = {
  ...defaultConfig,
  ...{
    plugins: [
      // Include WP's plugin config.
      ...defaultConfig.plugins,
      new CopyPlugin({
        patterns: [
          {
            from: "./node_modules/@wordpress/dataviews/build-style/style.css",
            to: "./dataviews-style.css",
            toType: "file",
          },
        ],
      }),
    ],
  },
};
