import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'packages/actionsheet/index.vue',
  output: {
    format: 'esm',
    file: 'haha.js'
  },
  external: 'vue',
  plugins: [
    vue({
      exclude: [
        'vue'
      ]
    }),
    resolve({
      modulesOnly: true
    })
  ]
}
