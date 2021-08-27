
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  adjustStyleLoaders
} = require("customize-cra");

const path = require('path')

module.exports = {


  webpack: override(
    adjustStyleLoaders(rule => {
      if (rule.test.toString().includes("scss")) {
        rule.use.push({
          loader: require.resolve("sass-resources-loader"),
          options: {
            resources: "./src/style/global.scss" //这里是你自己放公共scss变量的路径
          }
        });
      }
    }),

    addWebpackAlias({
      ['@']: path.join(__dirname, '/src'),
      '@components': path.join(__dirname, '/src/components'),
      '@views': path.join(__dirname, '/src/views'),
      '@style': path.join(__dirname, '/src/style'),
    }),
  )
}