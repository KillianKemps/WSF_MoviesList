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
      'name': this.$el.find('#name-input').val(),
      'synopsis': this.$el.find('#synopsis-input').val(),
      'genre': this.$el.find('#genre-input').val(),
      'image': this.$el.find('#image-input').val(),
      'actorList': this.$el.find('#actor-list-input').val()
    }

    this.movies.push(movie);
    this.render();
  },

  initialize: function() {
    this.movies = [{
      'name': 'Titanic',
      'synopsis': 'He didn\'t see the iceberg',
      'genre': 'Romantic',
      'image': 'http://fr.web.img4.acsta.net//medias/nmedia/18/36/27/14/20051394.jpg',
      'actorList': 'Leonardo DiCaprio, Kate Winslet'}];

    this.$moviesList = this.$el.find('#movies-list');

    this.render();
  },

  render: function() {
    this.$moviesList.empty();

    for (var i = 0; i < this.movies.length; i++) {
      this.$moviesList.append('<li><h2 class="title">' + this.movies[i].name + '</h2>' +
                              '<p class="synopsis">' + this.movies[i].synopsis + '</p>' +
                              '<p class="genre">' + this.movies[i].genre + '</p>' +
                              '<img class="image" src="' + this.movies[i].image + '" width="100px"/>' +
                              '<p class="actor-list>' + this.movies[i].actorList + '</p></li>');
    }
  }

});

var myApp = new App();
