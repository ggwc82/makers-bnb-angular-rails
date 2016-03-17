'use strict';

angular.module('makersBnB.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', ['$scope','$http', function($scope, $http) {
  var self = this;

  //self.createSpace = function(){
    console.log('here first')
    self.master = {};

    self.create = function(space) {
      self.master = angular.copy(space);
      $http.post('http://localhost:3000/spaces/create', self.master, config).then(successCallback, errorCallback);
    };  
  //};
  
  self.getSpaces = function(){
    $http.get('http://localhost:3000/spaces.json').then(function(response){
      $scope.spaces = response.data.splice(0, 25);
    });
  };
  $scope.spaces = self.getSpaces();
}]);