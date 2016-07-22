const React = require('react')
const setYear = require('date-fns/set_year')
const formatDate = require('date-fns/format')

module.exports = function (props) {
  const trs = props.games
    .sort((a, b) => setYear(a.releaseDate, 2000) - setYear(b.releaseDate, 2000))
    .map((game) => {
      const className = game.isMainSeries ? 'game-list-is-main-series' : ''

      return (
        <tr key={game.id} className={className}>
          <td className='game-list-release-day'>{formatDate(game.releaseDate, 'MMM DD')}</td>
          <td>{game.name}</td>
        </tr>
      )
    })

  return (
    <table className='game-list table'>
      <thead>
        <tr>
          <th>Release day</th>
          <th>Game</th>
        </tr>
      </thead>
      <tbody>{trs}</tbody>
    </table>
  )
}
