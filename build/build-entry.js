const fs = require('fs-extra')
const path = require('path')
const uppercamelcase = require('uppercamelcase')
const Components = require('./get-components')()
const version = process.env.VERSION || require('../package.json').version
const tips = '// This file is auto gererated by build/bin/build-entry.js'

function buildWevueEntry () {
  const uninstallComponents = [
    'Lazyload',
    'InfiniteScroll',
    'Dialog',
    'Toast',
    'TopTips'
  ]

  const importList = Components.map(name => `import ${uppercamelcase(name)} from './${name}'`)
  const exportList = Components.map(name => `${uppercamelcase(name)}`)
  const intallList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelcase(name)))

  const content = `${tips}
${importList.join('\n')}

const version = '${version}'
const components = [
  ${intallList.join(',\n  ')}
]

const install = (Vue, config = {}) => {
  components.forEach(Component => {
    Vue.use(Component)
  })

  Vue.use(InfiniteScroll)
  Vue.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    attempt: 3,
    ...config.lazyload
  })

  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$toptips = Vue.prototype.$toptips = TopTips
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  ${exportList.join(',\n  ')}
}

export default {
  install,
  version
}
`

  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content)
}

buildWevueEntry()
