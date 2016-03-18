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
    $scope.status;

    //works when it is defined as $scope below:
    $scope.create = function(space) {
      $http.post('http://localhost:3000/spaces', space).success(function() {
            //var spaces = [];
            //spaces.push(data);
        });
    };  
  //};
  
  self.getSpaces = function(){
    $http.get('http://localhost:3000/spaces.json').then(function(response){
      $scope.spaces = response.data.reverse().splice(0,25);
    });
  };
  $scope.spaces = self.getSpaces();
}]);