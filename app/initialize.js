const React = require('react')
const ReactDom = require('react-dom')
const App = require('./components/App')

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<App />, document.querySelector('#app'))
})
