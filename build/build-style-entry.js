const fs = require('fs-extra')
const path = require('path')
const components = require('./get-components')
const dependencyTree = require('dependency-tree')
const whiteList = []
const dir = path.join(__dirname, '../es')

function analyzeDependencies (component) {
  const checkList = ['base']

  search(
    dependencyTree({
      directory: dir,
      filename: path.join(dir, component, 'index.js'),
      filter: path => !~path.indexOf('node_modules')
    }),
    component,
    checkList
  )

  if (!whiteList.includes(component)) {
    checkList.push(component)
  }

  return checkList.filter(item => checkComponentHasStyle(item))
}

function search (tree, component, checkList) {
  Object.keys(tree).forEach(key => {
    search(tree[key], component, checkList)

    components
      .filter(item => key.replace(dir, '').split('/').includes(item))
      .forEach(item => {
        if (!checkList.includes(item) && !whiteList.includes(item) &&item !== component) {
          checkList.push(item)
        }
      })
  })
}

/**
 * 对应组件是否有样式
 *
 * @param component
 * @returns {*}
 */
function checkComponentHasStyle (component) {
  return fs.existsSync(
    path.join(__dirname, '../es/we-vue-css', `${component}.css`)
  )
}
