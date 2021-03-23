const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*********************************
 * Output
 *********************************/
const output = {
  path: path.join(__dirname, '/dist'),
  filename: '[name].bundle.js',
  publicPath: '/',
};
/*********************************``
 * Optimization
 *********************************/
const optimization = {
  minimizer: [
    new CssMinimizerPlugin(), 
    new TerserPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // minify: {
      //   emoveAttributeQuotes: true,
      //   collapseWhitespace: true,
      //   removeComments: true,
      // },
    }),
  ],
};
/*********************************
 * Plugins
 *********************************/
const plugins = [
  new MiniCssExtractPlugin({ filename: '[name].css' }),
  new CssMinimizerPlugin(),
  new CleanWebpackPlugin(),
];

module.exports = merge(common, {
  mode: 'production',
  plugins: plugins,
  optimization: optimization,
  output: output,
});
