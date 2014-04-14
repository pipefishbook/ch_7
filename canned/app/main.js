var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

function checkAjax() {
 $.ajax({
     url: "/api/movies",
     headers: {"content-type": "application/json"}
 });
};
// checkAjax();

var Monitor = require('./monitor');
var Movies = require('collections/movies');

var movies = new Movies();
var monitor = new Monitor(movies);
function simpleFetch() {
  movies._delay = 4000;
  movies.fetch();
}
simpleFetch();

// movies.fetch({
//   success: function(populated, response, options) {
//     populated.trigger('populated');
//     console.log(populated);
//     console.log(response);
//     console.log(options);
//   },
//   error: function() {
// 
//   }
// });

// movies.fetchPage(1);
// 
// var Movie = require('models/movie');
// 
// movie = movies.get(1);
// movie.customFetch();
