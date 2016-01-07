// Déclaration de l'appli en initilisant une vue Backbone
var App = Backbone.View.extend({

  // Rattacher la vue à un élément DOM
  el: '#app',

  // Hash events
  // Pour binder les évènements jQuery
  events: {
    'click .submit': 'submitFilm',
  },

  // On incrémente le compteur
  submitFilm: function(event) {
    // On kill notre event
    event.preventDefault();
    var movie = {
      'name': this.$el.find('#name').val(),
      'synopsis': this.$el.find('#synopsis').val(),
      'genre': this.$el.find('#genre').val(),
      'image': this.$el.find('#image').val(),
      'actor-list': this.$el.find('#actor-list').val()
    }

    this.movies.push(movie);
    this.render();
  },

  initialize: function() {
    this.movies = [{'name': 'John'}];

    this.$moviesList = this.$el.find('#movies-list');

    this.render();
  },

  render: function() {
    console.log(JSON.stringify(this.movies));
    this.$moviesList.html(JSON.stringify(this.movies));
  }

});

var myApp = new App();
