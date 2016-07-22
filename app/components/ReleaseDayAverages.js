const React = require('react')
const data = require('data')
const ReleaseDayAveragesTable = require('components/ReleaseDayAveragesTable')
const ReleaseDayMonthsGraph = require('components/ReleaseDayMonthsGraph')

module.exports = React.createClass({
  getInitialState () {
    return { mainSeriesOnly: true }
  },

  handleMainSeriesCheckboxChange () {
    this.setState({ mainSeriesOnly: this.refs.mainSeriesCheckbox.checked })
  },

  render () {
    const games = this.state.mainSeriesOnly ? data.mainSeriesGames : data.games
    /*
    const releaseDayList = games.map((game) => {
      return {
        name: game.name,
        isMainSeries: game.isMainSeries,
        releaseDateNormalized: setYear(game.releaseDate, 2000),
        releaseDay: formatDate(game.releaseDate, 'MMM DD'),
        releaseYear: game.releaseDate.getFullYear(),
        id: game.id
      }
    }).sort((a, b) => {
      return a.releaseDateNormalized - b.releaseDateNormalized
    })
    const gameListTrs = releaseDayList.map((release) => {
      const className = release.isMainSeries ? 'game-list-is-main-series' : ''
      return (
        <tr key={release.id} className={className}>
          <td className="game-list-release-day">{release.releaseDay}</td>
          <td>{release.name}</td>
        </tr>
      )
    })
    */

    return (
      <div>
        <div className='checkbox'>
          <label>
            <input
              ref='mainSeriesCheckbox'
              type='checkbox'
              onChange={this.handleMainSeriesCheckboxChange}
              checked={this.state.mainSeriesOnly} />
            &nbsp;Only include main series releases
          </label>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <ReleaseDayAveragesTable games={games} />
          </div>
          <div className='col-md-6'>
            <ReleaseDayMonthsGraph games={games} />
          </div>
        </div>
      </div>
    )
  }
})