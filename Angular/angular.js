angular.module('App', [])
  .controller('AppController', ['$scope', function($scope) {
    var scope = this;

    $scope.movies = [{
      'title': 'Titanic',
      'synopsis': 'He didn\'t see the iceberg',
      'genre': 'Romantic',
      'image': 'http://fr.web.img4.acsta.net//medias/nmedia/18/36/27/14/20051394.jpg',
      'actorList': 'Leonardo DiCaprio, Kate Winslet'}
    ];

    scope.submitMovie = function($event) {
      console.log('submit!');
      $event.preventDefault();
    };

  }]);
