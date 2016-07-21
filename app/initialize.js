var $ = require('./lib/bootstrap-jquery')
var visible = require('visible-element')($)
var Vue = require('vue')
var releaseData = require('./data')
var humanizeDuration = require('humanize-duration')
var setYear = require('date-fns/set_year')
var formatDate = require('date-fns/format')
var mean = require('lodash/mean')
var median = require('median')

function humanizeTimeDifference (now, other) {
  var diff = other - now
  var duration = humanizeDuration(diff, {
    round: true,
    units: ['d', 'h', 'm', 's']
  })
  if (diff > 0) {
    return 'in ' + duration
  } else {
    return duration + ' ago'
  }
}

var app = new Vue({
  el: '#app',
  data: {
    now: new Date(),
    releaseYear: 2017,
    releaseDayListMainSeriesOnly: true,
    releases: releaseData
  },
  computed: {
    releaseYearToEarliest: function () {
      return humanizeTimeDifference(this.now, new Date(this.releaseYear, 0, 1))
    },
    releaseYearToLatest: function () {
      return humanizeTimeDifference(this.now, new Date(this.releaseYear, 11, 31))
    },
    releaseYearToMiddle: function () {
      return humanizeTimeDifference(this.now, new Date(this.releaseYear, 6, 2))
    },
    games: function () {
      var namesSeen = {}

      return this.releases.reduce(function (result, release) {
        if (namesSeen[release.name]) {
          return result
        } else {
          namesSeen[release.name] = true

          return result.concat({
            name: release.name,
            isMainSeries: release.isMainSeries,
            releaseDate: release.releaseDate
          })
        }
      }, [])
    },
    mainSeriesGames: function () {
      return this.games.filter(function (game) {
        return game.isMainSeries
      })
    },
    releaseDayList: function () {
      var gameList = this.releaseDayListMainSeriesOnly ? this.mainSeriesGames : this.games

      return gameList.map(function (game) {
        return {
          name: game.name,
          isMainSeries: game.isMainSeries,
          releaseDateNormalized: setYear(game.releaseDate, 2000),
          releaseDay: formatDate(game.releaseDate, 'MMM DD'),
          releaseYear: game.releaseDate.getFullYear()
        }
      }).sort(function (a, b) {
        return a.releaseDateNormalized - b.releaseDateNormalized
      })
    },
    releaseDayAverages: function () {
      var releaseDatesAsMs = this.releaseDayList.map(function (game) {
        return game.releaseDateNormalized.valueOf()
      })

      function formattedFromString (ms) {
        var date = setYear(new Date(ms), 2017)
        return formatDate(date, 'MMMM DD')
      }

      return {
        mean: formattedFromString(mean(releaseDatesAsMs)),
        median: formattedFromString(median(releaseDatesAsMs))
      }
    }
  }
})

setInterval(function () {
  if (visible.inViewport($('.release-year-list'))) {
    app.now = new Date()
  }
}, 500)
