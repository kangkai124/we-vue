const fs = require('fs')
const path = require('path')

module.exports = function () {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../src/components'))

  return dirs
}
