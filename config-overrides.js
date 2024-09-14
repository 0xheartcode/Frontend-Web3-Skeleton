module.exports = function override(config, env) {
  // Disable source map generation
  config.devtool = false;

  // Add a rule to ignore all source map warnings
  config.module.rules.push({
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

  return config;
};
