const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const helpers = require('./helpers');
require("dotenv").config();

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('build'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: 'async',
      maxAsyncRequests: 5,
      automaticNameDelimiter: '~',
      maxSize: 50000,
    },
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('tsconfig.json')
            }
          },
          'angular2-template-loader',
          'angular-router-loader'
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    port: process.env.PORT || 8081,
  }
});
