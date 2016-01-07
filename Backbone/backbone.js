// Déclaration de l'appli en initilisant une vue Backbone
var App = Backbone.View.extend({

  // Rattacher la vue à un élément DOM
  el: '#app',

  // Hash events
  // Pour binder les évènements jQuery
  events: {
    'click .increase': 'increaseCounter',
    'click .decrease': 'decreaseCounter'
  },

  // On incrémente le compteur
  increaseCounter: function(event) {
    // On kill notre event
    event.preventDefault();

    this.countClick++;

    this.render();
  },

  // On décrémente le compteur
  decreaseCounter: function(event) {
    // On kill notre event
    event.preventDefault();

    this.countClick--;

    this.render();
  },

  initialize: function() {
    this.countClick = 0;

    this.$nbClick = this.$el.find('.nb-click');

    this.render();
  },

  render: function() {
    this.$nbClick.html(this.countClick);
  }

});

var myApp = new App();
