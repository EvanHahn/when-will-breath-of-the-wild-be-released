const React = require('react')
const config = require('config')
const data = require('data')
const ReleaseYearBox = require('components/ReleaseYearBox')
const ReleaseYearList = require('components/ReleaseYearList')
const ReleaseDayAverages = require('components/ReleaseDayAverages')
const YouTubeEmbed = require('components/YouTubeEmbed')

module.exports = React.createClass({
  render () {
    return (
      <div>
        <p><a target='_blank' href='https://twitter.com/NintendoAmerica/'>Nintendo has tweeted</a> and repeatedly mentioned a {config.releaseYear} release date. What does that mean?</p>

        <ReleaseYearBox />

        <ReleaseYearList
          earliest={new Date(config.releaseYear, 0, 1)}
          middle={new Date(config.releaseYear, 6, 2)}
          latest={new Date(config.releaseYear, 11, 31)}
         />

        <p>What if we looked at something else?</p>

        <hr />

        <p>Nintendo's new NX console is <a href='http://www.mobilenapps.com/articles/15815/20160721/nintendo-nx-release-date-quality-of-life.htm' target='_blank'>slated for a March {config.releaseYear} release</a>. What if it's an NX launch title?</p>

        <ReleaseYearList
          earliest={new Date(config.releaseYear, config.nxReleaseMonth, 1)}
          middle={new Date(config.releaseYear, config.nxReleaseMonth, 16)}
          latest={new Date(config.releaseYear, config.nxReleaseMonth, 31)}
         />

        <p>What if we looked at more data?</p>

        <hr />

        <p>There have been <strong>{data.games.length} Zelda games</strong>, <strong>{data.mainSeriesGames.length} of which are in the main series</strong>. Can we look at release dates to find a pattern?</p>

        <ReleaseDayAverages />

        <hr />

        <p>So, when will Breath of the Wild be released?</p>

        <p>Your guess is as good as mine! <strong>My guess: November of {config.releaseYear}</strong>, in time for the holidays. But we'll see!</p>

        <p>Until then, I'll be rewatching the trailer over and over.</p>

        <YouTubeEmbed src='https://www.youtube.com/embed/1rPxiXXxftE' />

        <footer className='small'>
          <hr />

          <p>Release data comes from <a href='http://www.giantbomb.com/'>GiantBomb</a>. See the code <a href='https://github.com/EvanHahn/when-will-breath-of-the-wild-be-released'>on GitHub</a>. Enjoy!</p>
        </footer>
      </div>
    )
  }
})
