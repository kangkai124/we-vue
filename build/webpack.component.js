'use strict'
const path = require('path')
const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const components = require('./get-components')()
const safeParser = require('postcss-safe-parser')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


let componentEntries = {}
components.forEach((component) => {
  componentEntries[component] = `./packages/${component}/`
})

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: componentEntries,
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true
    })
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {

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
      filename: '[name]/style.css'
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        parser: safeParser
      }
    })
  ]
})

module.exports = webpackConfig
