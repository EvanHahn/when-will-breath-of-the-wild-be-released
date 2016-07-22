const React = require('react')
const config = require('config')
const isVisible = require('lib/is-visible')
const humanizeTimeDifference = require('lib/humanize-time-difference')
const formatDate = require('date-fns/format')

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

    const earliest = formatDate(this.props.earliest, 'MMMM D, YYYY')
    const latest = formatDate(this.props.latest, 'MMMM D, YYYY')
    const middle = formatDate(this.props.middle, 'MMMM D, YYYY')
    const releaseYearToEarliest = humanizeTimeDifference(now, this.props.earliest)
    const releaseYearToLatest = humanizeTimeDifference(now, this.props.latest)
    const releaseYearToMiddle = humanizeTimeDifference(now, this.props.middle)

    return (
      <ul ref='list' className='release-year-list'>
        <li><p><strong>{latest}</strong> is {releaseYearToLatest}. That's the <strong>longest</strong> we'll have to wait.</p></li>
        <li><p><strong>{earliest}</strong> is {releaseYearToEarliest}. That's the <strong>shortest</strong> we have to wait.</p></li>
        <li><p><strong>{middle}</strong> is {releaseYearToMiddle}. That's the <strong>average</strong> of those two times.</p></li>
      </ul>
    )
  }
})
