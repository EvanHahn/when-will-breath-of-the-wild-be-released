module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    },
    sass: {
      options: {
        includePaths: [
          'node_modules/bootstrap/scss'
        ]
      }
    }
  }
}
