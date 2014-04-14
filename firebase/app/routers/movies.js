var Backbone = require('backbone');
var _ = require('underscore');

var Monitor = require('../../monitor');
// data
var Movies = require('collections/movies');
var movies = new Movies();

// views
var Layout = require('views/layout');

var MoviesRouter = Backbone.Router.extend({

  routes: {
    'movies/:id': 'selectMovie',
    '':           'showMain'
  },

  selectMovie: function(id) {
    this.movies.resetSelected();
    this.movies.selectByID(id);
    this.layout.setDetails(this.movies.get(id));
  },

  showMain: function() {
    this.movies.resetSelected();
    this.layout.setChose();
  },

  initialize: function(options) {
    var that = this;
    monitor = new Monitor(movies);
    movies.on('sync', function(results) {
      console.log(results);
      that.movies = movies;
      that.layout = Layout.getInstance({
        el: '#movies', router: this
      });
      that.layout.render();
    });
  }
});
module.exports = MoviesRouter;
