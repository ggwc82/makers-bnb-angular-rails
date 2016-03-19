'use strict';

makersBnB.controller('SpacesCtrl', ['$http', '$location', function( $http, $location) {
  var self = this;
  self.spaces = [];
  self.currentspace;

  self.create = function(space) {
    $http.post('http://localhost:3000/api/spaces', space).success(function(data) {
      console.log(data)
      self.spaces.push(data);
      // self.currentspace = data.space;
      self.showSpace(data.space);

    });
  };

  self.getSpaces = function(){
    $http.get('http://localhost:3000/api/spaces.json').then(function(response){
      self.spaces = response.data.reverse();
    });
  };

  self.showSpace = function(space){
    $http.get('http://localhost:3000/api/spaces/' + space.id).then(function(response){
      self.currentspace = response.data;
      $location.path('/spaces/' + space.id)
    });
  };

  self.editSpace = function(space){
    self.currentspace = space;

    $location.path('/spaces/edit/' + space.id)
  };

  self.updateSpace = function(space){
    console.log(space)
    $http.put('http://localhost:3000/api/spaces/' + space.id).then(function(response){
      console.log(response)
      $location.path('/')
    });

  };



}]);