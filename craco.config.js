const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // Disable source map generation
      webpackConfig.devtool = false;

      // Set NODE_ENV to production for build
      if (env === "production") {
        webpackConfig.mode = "production";
      }

      // Add a rule to ignore all source map warnings
      webpackConfig.module.rules.push({
        test: /\.js$/,
        enforce: "pre",
        use: [
          {
            loader: "source-map-loader",
            options: {
              filterSourceMappingUrl: () => false, // Ignore all source map warnings
            },
          },
        ],
      });

      // Add polyfills for Node.js core modules
      webpackConfig.resolve.fallback = {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve("assert"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        buffer: require.resolve("buffer"),
      };

      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        })
      );

      return webpackConfig;
    },
  },
};
