const $ = require('lib/bootstrap-jquery')
const visible = require('visible-element')($)

module.exports = function () {
  return visible.inViewport.apply(this, arguments)
}
