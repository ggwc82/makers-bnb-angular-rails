'use strict';

makersBnB.controller('SpacesCtrl', ['$http', '$location', 'spacesService', function( $http, $location, spacesService) {
  var self = this;

  self.create = function(space) {
    spacesService.createSpace(space);
  };

  self.getSpaces = function(){
    $http.get('http://localhost:3000/api/spaces.json').then(function(response){
      self.spaces = response.data.reverse();
    });
  };

  self.showSpace = function(space){
    spacesService.showSpace(space);
  };

  self.editSpace = function(space){
    $location.path('/spaces/edit/' + space.id)
  };

  self.updateSpace = function(space){
    spacesService.updateSpace(space);
  };

  self.deleteSpace = function(space){
    spacesService.deleteSpace(space);
  };

}]);

makersBnB.service('spacesService', ['$http', '$location', function($http, $location){
  var self = this;
  self.spaces = [];
  self.currentspace;

  this.createSpace = function(space){
    $http.post('http://localhost:3000/api/spaces', space).success(function(data) {
      self.spaces.push(data);
      self.showSpace(data.space);
    });
  }

  this.showSpace = function(space){
    $http.get('http://localhost:3000/api/spaces/' + space.id).then(function(response){
      self.currentspace = response.data;
      $location.path('/spaces/' + space.id)
    });
  };

  this.updateSpace = function(space){
    $http.put('http://localhost:3000/api/spaces/' + space.id, space).success(function(response){
      self.showSpace(response.space);
    });
  };

  self.deleteSpace = function(space){
    $http.delete('http://localhost:3000/api/spaces/' + space.id).then(function(data){
      $location.path('/')
    });
  };

}])





