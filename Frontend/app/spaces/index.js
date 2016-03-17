'use strict';

angular.module('makersBnB.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', [function() {

}]);