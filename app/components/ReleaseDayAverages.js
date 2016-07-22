const React = require('react')
const data = require('data')
const ReleaseDayAveragesTable = require('components/ReleaseDayAveragesTable')
const ReleaseDayMonthsGraph = require('components/ReleaseDayMonthsGraph')
const ReleaseDayAverageText = require('components/ReleaseDayAverageText')

module.exports = React.createClass({
  getInitialState () {
    return {
      mainSeriesOnly: true,
      includeAllReleases: false
    }
  },

  handleCheckboxChange () {
    this.setState({
      mainSeriesOnly: this.refs.mainSeriesCheckbox.checked,
      includeAllReleases: this.refs.includeAllReleasesCheckbox.checked
    })
  },

  render () {
    let games
    if (this.state.mainSeriesOnly) {
      games = this.state.includeAllReleases ? data.mainSeriesReleases : data.mainSeriesGames
    } else {
      games = this.state.includeAllReleases ? data.releases : data.games
    }

    return (
      <div>
        <div className='row'>
          <div className='col-md-6 checkbox'>
            <label>
              <input
                ref='mainSeriesCheckbox'
                type='checkbox'
                onChange={this.handleCheckboxChange}
                checked={this.state.mainSeriesOnly} />
              &nbsp;Only include main series releases
            </label>
          </div>

          <div className='col-md-6 checkbox'>
            <label>
              <input
                ref='includeAllReleasesCheckbox'
                type='checkbox'
                onChange={this.handleCheckboxChange}
                checked={this.state.includeAllReleases} />
              &nbsp;Include all releases (not just the first)
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <ReleaseDayMonthsGraph games={games} />
            <ReleaseDayAverageText games={games} />
          </div>
          <div className='col-md-6'>
            <ReleaseDayAveragesTable games={games} />
          </div>
        </div>
      </div>
    )
  }
})
