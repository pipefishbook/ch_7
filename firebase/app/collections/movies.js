var Backbone = require('backbone');
Backbone.Firebase = require('./backbone_firebase');

var Movie = require('models/movie');
var _ = require('underscore');

var Movies = Backbone.Firebase.Collection.extend({
  model: Movie,
  firebase: "https://movies-demo.firebaseio.com/movies",

  getSelected: function() {
    return this.pluck('selected').indexOf(true);
  },

  // Unselect all models
  resetSelected: function() {
    this.each(function(model) {
      model.set({"selected": false});
    });
  },

  // Select a specific model from the collection
  selectByID: function(id) {
    var movie = this.get(id);
    movie.set({"selected": true});
    return movie.id;
  },

  sortByTitle: function() {
    return this.sortBy('title');
  },

  sortByRating: function() {
      var sorted = this.sortBy(function(m) {
        return (10 - m.get('rating'));
      });
      return sorted;
  },

  sortByShowtime: function() {
      return this.sortBy('showtime');
  }
})
module.exports = Movies;
