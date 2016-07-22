const React = require('react')
const throttle = require('lodash/throttle')
const $ = require('jquery')

const HEIGHT_RATIO = 9 / 16

module.exports = React.createClass({
  componentDidMount () {
    this.throttledResize = throttle(this.resizeIframe, 500)

    $(window).on('resize', this.throttledResize)
    this.resizeIframe()
  },

  componentWillUnmount () {
    $(window).off('resize', this.throttledResize)
  },

  resizeIframe () {
    const iframe = this.refs.iframe
    iframe.height = $(this.refs.iframe).width() * HEIGHT_RATIO
  },

  render () {
    return (
      <iframe ref='iframe' width='100%' height='315' src={this.props.src} frameBorder='0' allowFullScreen></iframe>
    )
  }
})
