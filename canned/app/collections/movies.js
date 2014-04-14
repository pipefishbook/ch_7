var $ = require('jquery-untouched');
var Backbone = require('backbone');
Backbone.$ = $;

var Movies = Backbone.Collection.extend({
 model: require('models/movie'),

 url: '/api/movies',

// ... same as before

 fetchPage: function(num) {
    return this.fetch({data: {page: num}});
 },

 delayedFetch: function(delay) {
    return this.fetch({headers: {"X-DELAY": delay}});
 },

 beginSync: function() {
   console.log("before sync:  " + Date.now());
 },
 finishSync: function() {
   console.log("after sync:  " + Date.now());
 },

 apiRoot: 'config.api.versionRoot',

 initialize: function() {
    this.on('request', this.beginSync);
    this.on('sync', this.finishSync);
  }
});
module.exports = Movies;
