
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/*********************************
 * Entry
 *********************************/
const entry = {
  app: './src/index',
  // latex_parser: './src/math-components/parser/index',
}
/*********************************
 * Resolve
 *********************************/
const resolve = {
  extensions: ['.ts', '.tsx', '.js'],
}
/*********************************
 * Module
 *********************************/
const _module = {
  rules: [
    // we use babel-loader to load our jsx and tsx files
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          "presets": [
            "@babel/typescript"
        ],
        "plugins": [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread"
        ]
        }
      },
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg|png|blob)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'imgs',
          },
        },
      ],
    },
    {
      test: /\.(json|geojson)?$/,
      loader: 'json-loader'
    },
    {
      test: /\.pug$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'pug-html-loader'],
    },
    
    {
      test: /.s?css$/,
      use:  [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },

      ],
    },
  ],
}
/*********************************
 * Optimization
 *********************************/
const optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'common',
        chunks: 'all',
      },
    },
    chunks: 'all',
  },
  minimizer: [new CssMinimizerPlugin()],
  
}
/*********************************
 * Exports
 *********************************/

module.exports = {
  entry: entry,
  resolve: resolve,
  module: _module,
  optimization: optimization,
}
