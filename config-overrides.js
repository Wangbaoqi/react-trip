
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
   
    addLessLoader({
      // 定制主题
      // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
      lessOptions: {
        modifyVars: {
          hack: `true; @import "/src/style/settings/vant-theme.less";`
          // "@brand-color": "#ef5350", // 主题色
          // 默认是1px对应350px宽度的设计稿
          // "@hd": '2px', // 750宽度设计稿
        },
        javascriptEnabled: true,
      }
    }),

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