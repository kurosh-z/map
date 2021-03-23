const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/*********************************
 * Plugins
 *********************************/
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin,
  new CssMinimizerPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
]
/*********************************
 * Output
 *********************************/
const output = {
  path: path.join(__dirname, '/dist'),
  filename: '[name].bundle.js',
  pathinfo: true,
  publicPath: '/',

  //   publicPath: path.resolve(__dirname, 'dist'),
}
/*********************************
 * devServer
 *********************************/
const devServer = {
  contentBase: path.join(__dirname, 'dist'),
  // compress: true,
  port: 9010,
  historyApiFallback: true,
}



module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: output,
  plugins: plugins,
  devServer: devServer,
})
