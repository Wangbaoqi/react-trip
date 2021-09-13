
const {
  override,
  addDecoratorsLegacy,
  addPostcssPlugins,
  addLessLoader,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  adjustStyleLoaders,
  fixBabelImports,
  overrideDevServer
} = require("customize-cra");

const path = require('path')






const devServerConfig = () => config => {

  return {
    ...config,
    // proxy: {
    //   '/api': {
    //     target: 'https://www.fastmock.site/mock/8a9721af5e539448794802d10acdc165/trips',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}



module.exports = {

  webpack: override(
   
    fixBabelImports('react-vant', {
      libraryDirectory: "es",
      style: true
    }),

    addPostcssPlugins([require("postcss-pxtorem")({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      exclude: /node_modules/i
    })]),

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
      ['@']: path.join(__dirname, '/src')
    }),
  ),

  devServer: overrideDevServer(devServerConfig()),

}