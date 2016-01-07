angular.module('App', [])
  .controller('AppController', function() {
    var scope = this;

    scope.countClick = 0;

    scope.increaseCounter = function() {
      scope.countClick += 1;
    };

    scope.decreaseCounter = function() {
      scope.countClick -= 1;
    };
  });
