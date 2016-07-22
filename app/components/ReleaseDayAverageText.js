const React = require('react')
const mean = require('lodash/mean')
const median = require('median')
const setYear = require('date-fns/set_year')
const startOfDay = require('date-fns/start_of_day')
const formatDate = require('date-fns/format')
const isVisible = require('lib/is-visible')
const config = require('config')
const humanizeTimeDifference = require('lib/humanize-time-difference')

module.exports = React.createClass({
  getInitialState () {
    return { now: new Date() }
  },

  tick () {
    if (isVisible(this.refs.main)) {
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
    const datesAsMs = this.props.games.map((game) => setYear(game.releaseDate, 2000).valueOf())
    const medianMs = median(datesAsMs)
    const meanMs = mean(datesAsMs)

    return (
      <div ref='main'>
        <Average type='median' now={this.state.now} thenMs={medianMs} />
        <Average type='mean' now={this.state.now} thenMs={meanMs} />
      </div>
    )
  }
})

function Average (props) {
  const then = startOfDay(setYear(new Date(props.thenMs), config.releaseYear))

  const formattedDate = formatDate(then, 'MMMM D')
  const duration = humanizeTimeDifference(props.now, then)

  return (
    <p>
      The <strong>{props.type}</strong> release day of these games is {formattedDate}, which is {duration}.
    </p>
  )
}
