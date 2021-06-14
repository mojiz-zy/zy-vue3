// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
module.exports = {
  chainWebpack: config => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }
    ]);
  },
  publicPath: "./",
  productionSourceMap: false
};
