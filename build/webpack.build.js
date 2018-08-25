'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const safeParser = require('postcss-safe-parser')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true
    }),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: 'style.css',
      // set the following option to `true` if you want to extract CSS from
      // codesplit chunks into this main css file as well.
      // This will result in *all* of your app's CSS being loaded upfront.
      allChunks: false,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
      ? { parser: safeParser, map: { inline: false } }
      : { parser: safeParser }
    }),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
})

module.exports = webpackConfig
