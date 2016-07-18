// var $ = require('./lib/bootstrap-jquery')
var Vue = require('vue')
var releaseData = require('./data')
var humanizeDuration = require('humanize-duration')

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
            isMainSeries: release.isMainSeries
          })
        }
      }, [])
    },
    mainSeriesGames: function () {
      return this.games.filter(function (game) {
        return game.isMainSeries
      })
    }
  }
})

setInterval(function () {
  app.now = new Date()
}, 1000)
