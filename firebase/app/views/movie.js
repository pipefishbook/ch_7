var Backbone = require('backbone');
var $ = require('jquery-untouched');
var _ = require('underscore');

var MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: '<h1><a href="#movies/<%= id %>"><%= title %></a><hr></h1>',

  events: {
    'click': 'selectMovie'
  },

  selectMovie: function(ev) {
    console.log('event on ' + this.model.id);
    this.selection.set('selected', this.model.id);
    this.router.navigate("#movies/" + this.model.id);
  },
 
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    var selected = (this.selection.get('selected') === this.model.id);
    this.$el.toggleClass('selected', selected);
    return this;
  },

  initialize: function(options) {
    this.selection = options.selection;
    this.listenTo(this.selection, 'change:selected', this.render);
    this.router = options.router;
  }
});
module.exports = MovieView;
