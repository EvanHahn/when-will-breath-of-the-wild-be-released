var humanizeDuration = require('humanize-duration')

module.exports = function humanizeTimeDifference (now, other) {
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
