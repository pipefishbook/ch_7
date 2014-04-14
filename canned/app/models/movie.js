var Backbone = require("backbone");
  var Movie = Backbone.Model.extend({
    defaults: {
      title: "default",
      year: 0,
      description: "empty",
      selected: false
    },
    paramsWhitelist: ['director', 'title', 'genre'],
    url: '/api/movies/',

    customFetch: function(options) {
      options || (options = {});
      options.data = this.pick(this.paramsWhitelist);
      options.id = 1;
      console.log(options.data);
      return this.fetch(options); //this.doSomething()});
    }
  });
  module.exports = Movie;
