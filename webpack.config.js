'use strict';

const webpack = require('webpack');
const path = require('path');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles.css');

const developmentConfig = {
  devtool: 'cheap-module-eval-source-map',

  context: path.join(__dirname, 'src'),
  entry: ['babel-polyfill', './js/app'],
  output: {
   filename: "bundle.js"
  },

  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets')
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: false
        }
      },

      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: 'dashes',
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, 'node_modules')
    ]),
    new FriendlyErrorsWebpackPlugin(),
    extractCSS
  ],

  devServer: {
    //stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,

    quiet: true,

    watchOptions: {
      aggregateTimeout: 300,
      poll: 100
    }
  }
};

module.exports = env => {
  console.log('environment', env);
  return developmentConfig;
};