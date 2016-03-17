'use strict';

angular.module('makersBnB.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', [ '$scope','$http',  function( $scope, $http) {


  this.getSpaces = function(){

    $http.get('http://localhost:3000/spaces.json').then(function(response){
      $scope.spaces = response.data.splice(0, 25);
    });
  };
  $scope.spaces = this.getSpaces();

}]);