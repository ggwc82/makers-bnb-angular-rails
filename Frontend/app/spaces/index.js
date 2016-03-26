'use strict';

angular.module('makersBnB.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', ['$scope','$http', function($scope, $http) {
    $scope.status;
    $scope.spaces;
    $scope.numLimit = 3;

    $scope.create = function(space) {

      $http.post('http://localhost:3000/api/spaces', space).success(function() {
          $scope.spaces.push(data);
          $scope.getSpaces();
        });
    };


  $scope.getSpaces = function(){
    $http.get('http://localhost:3000/api/spaces.json').then(function(response){
      $scope.spaces = response.data.reverse().splice(0,25);
    });
  };

}]);