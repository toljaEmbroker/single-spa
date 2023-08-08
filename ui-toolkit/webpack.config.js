const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "embroker",
    projectName: "ui-toolkit",
    webpackConfigEnv,
    argv,
  });

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    // customize the webpack config here
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            "postcss-loader",
          ],
        },
      ],
    },
  });
};
