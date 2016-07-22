const React = require('react')

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

module.exports = function (props) {
  let maxCount = 0
  const months = props.games.reduce((result, game) => {
    const month = game.releaseDate.getMonth()
    if (!result.hasOwnProperty(month)) {
      result[month] = 0
    }

    result[month]++

    maxCount = Math.max(maxCount, result[month])

    return result
  }, {})

  const rows = MONTHS.map((monthName, index) => {
    const count = months[index] || 0

    return (
      <li key={index}>
        <p>{monthName} <span className='label label-default label-pill'>{count}</span></p>
        <p><progress className='progress' value={count} max={maxCount}></progress></p>
      </li>
    )
  })

  return <ul className='release-day-months-graph'>{rows}</ul>
}
