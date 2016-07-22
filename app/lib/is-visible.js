const visible = require('visible-element')(require('jquery'))

module.exports = function () {
  return visible.inViewport.apply(this, arguments)
}
