const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              failOnHint: true,
              emitErrors: false,
              formatter: 'stylish'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'to-string-loader',
      //     { loader: 'sass-loader', options: { sourceMap: true } },
      //     { loader: 'css-loader', options: { sourceMap: true } },
      //   ],
      //   include: helpers.root('src', 'app')
      // },
      {
        test: /\.scss$/,
        use: [
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
