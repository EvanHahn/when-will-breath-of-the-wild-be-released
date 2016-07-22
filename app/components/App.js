const React = require('react')
const config = require('config')
const data = require('data')
const ReleaseYearBox = require('components/ReleaseYearBox')
const ReleaseYearList = require('components/ReleaseYearList')
const ReleaseDayAverages = require('components/ReleaseDayAverages')

module.exports = React.createClass({
  render () {
    return (
      <div>
        <p><a target='_blank' href='https://twitter.com/NintendoAmerica/'>Nintendo has tweeted</a> and repeatedly mentioned a {config.releaseYear} release date. What does that mean?</p>

        <ReleaseYearBox />

        <ReleaseYearList />

        <p>So that's one way to look at it: looking at different parts of {config.releaseYear}.</p>

        <p>What if we looked at something else?</p>

        <hr />

        <p>There have been <strong>{data.games.length} Zelda games</strong> of which <strong>{data.mainSeriesGames.length} are in the main series</strong>. Can we look at release dates to find a pattern?</p>

        <ReleaseDayAverages />

        <hr />

        <p>So, when will it be released?</p>
      </div>
    )
  }
})
