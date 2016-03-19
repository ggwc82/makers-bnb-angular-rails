'use strict';

makersBnB.controller('SpacesCtrl', ['$scope','$http', function($scope, $http) {
  var self = this;
  $scope.spaces = [];
  $scope.currentspace;

  $scope.create = function(space) {
    $http.post('http://localhost:3000/api/spaces', space).success(function(data) {
      console.log(data)
      $scope.spaces.push(data);
      self.currentspace = data.space;
      console.log("currentspace id " + self.currentspace.id)

    });
  };  
  
  $scope.getSpaces = function(){
    $http.get('http://localhost:3000/api/spaces.json').then(function(response){
      $scope.spaces = response.data.reverse();
    });
  };
}]);