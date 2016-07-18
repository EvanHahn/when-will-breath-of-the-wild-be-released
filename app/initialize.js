var $ = require('./lib/bootstrap-jquery')
var Vue = require('vue')
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
    releaseYear: 2017
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
    }
  }
})

setInterval(function () {
  app.now = new Date()
}, 1000)
