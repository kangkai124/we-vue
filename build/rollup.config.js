import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'

export default {
  input: 'packages/index.js',
  output: {
    format: 'esm',
    file: 'haha.js'
  },
  external: 'vue',
  plugins: [
    css(),
    vue({
      css: false
    }),
    resolve({
      extensions: ['.js', '.vue'],
      modulesOnly: true
    })
  ]
}
