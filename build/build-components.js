/**
 * Compile components
 */
'use strict'

process.env.NODE_ENV = 'production'

const fs = require('fs-extra')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.component')
// const compiler = require('vue-sfc-compiler')
const VueTemplateCompiler = require('vue-template-compiler')

const componentCompiler = require('@vue/component-compiler')

const compilerOption = {
  babel: {
    extends: path.join(__dirname, '../.babelrc')
  }
}

const esDir = path.join(__dirname, '../es')
const libDir = path.join(__dirname, '../lib')
const srcDir = path.join(__dirname, '../packages')

// clear dir
fs.emptyDirSync(esDir)
fs.emptyDirSync(libDir)

// copy packages
fs.copySync(srcDir, esDir)


const compoenntPath = path.join('es', 'actionsheet/index.vue')

const source = fs.readFileSync(compoenntPath, 'utf-8')

fs.removeSync(compoenntPath)


const compiler = componentCompiler.createDefaultCompiler()

const data = compiler.compileToDescriptor('test.js', source)

// const jjj = compiler(source, compilerOption).js

console.log(data.template)

// fs.outputFileSync(compoenntPath, jjj)

// rm(path.join(__dirname, '../lib/*'), err => {
//   if (err) throw err
//   webpack(webpackConfig, function (err, stats) {
//     if (err) throw err
//     process.stdout.write(stats.toString({
//       colors: true,
//       modules: false,
//       children: false,
//       chunks: false,
//       chunkModules: false
//     }) + '\n\n')
//
//     if (stats.hasErrors()) {
//       console.log(chalk.red('  Build failed with errors.\n'))
//       process.exit(1)
//     }
//
//     console.log(chalk.cyan('  Build complete.\n'))
//   })
// })
