const React = require('react')
const config = require('config')
const isVisible = require('lib/is-visible')
const humanizeTimeDifference = require('lib/humanize-time-difference')

module.exports = React.createClass({
  getInitialState () {
    return { now: new Date() }
  },

  tick () {
    if (isVisible(this.refs.list)) {
      this.setState({ now: new Date() })
    }
  },

  componentDidMount () {
    this.interval = setInterval(this.tick, 500)
  },

  componentWillUnmount () {
    clearInterval(this.interval)
  },

  render () {
    const now = this.state.now
    const releaseYearToEarliest = humanizeTimeDifference(now, new Date(config.releaseYear, 0, 1))
    const releaseYearToLatest = humanizeTimeDifference(now, new Date(config.releaseYear, 11, 31))
    const releaseYearToMiddle = humanizeTimeDifference(now, new Date(config.releaseYear, 6, 2))

    return (
      <ul ref='list' className='release-year-list'>
        <li><p><strong>December 31, {config.releaseYear}</strong> is {releaseYearToLatest}. That's the <strong>longest</strong> we'll have to wait.</p></li>
        <li><p><strong>January 1, {config.releaseYear}</strong> is {releaseYearToEarliest}. That's the <strong>shortest</strong> we have to wait.</p></li>
        <li><p><strong>July 2, {config.releaseYear}</strong> is {releaseYearToMiddle}. That's the <strong>middle</strong> of the year.</p></li>
      </ul>
    )
  }
})
