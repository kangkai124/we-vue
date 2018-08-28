import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'
import path from 'path'
import fs from 'fs'

const components = require('./get-components')()

let externals = components.map(component => {
  if (fs.existsSync(path.resolve(`./packages/${component}/index.vue`))) {

    return path.resolve(`./packages/${component}/index.vue`)
  } else if (fs.existsSync(path.resolve(`./packages/${component}/index.js`))) {
    return path.resolve(`./packages/${component}/index.js`)
  }
})

console.log(externals)

export default {
  input: 'packages/index.js',
  output: {
    format: 'esm',
    file: 'haha.js'
  },
  external: [
    ...externals,
    'vue'
  ],
  plugins: [
    css(),
    vue({
      css: false
    }),
    babel({
      runtimeHelpers: true
    }),
    buble({
      objectAssign: 'Object.assign'
    }),
    resolve({
      extensions: ['.js', '.vue'],
      modulesOnly: true
    })
  ]
}
