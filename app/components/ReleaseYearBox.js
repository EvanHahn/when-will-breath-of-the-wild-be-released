const React = require('react')
const config = require('config')

module.exports = function () {
  return (
    <div className='release-year-box'>
      <span className='release-year-box-header'>Release year:</span>
      <span className='release-year-box-year display-1'>{config.releaseYear}</span>
    </div>
  )
}
