var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

$.ajax({
    url: "/api/movies",
    headers: {"content-type": "application/json"}
});

// $(document).ready(function() {
//   console.log('init');
//   var router = new MoviesRouter({el: $('#movies') });
//   Backbone.history.start({
//     pushState: true,
//     root: '/'
//   });
// });

