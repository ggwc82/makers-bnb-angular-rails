'use strict';

// Declare app level module which depends on views, and components
angular.module('makersBnB', [ 'ngRoute','makersBnB.index',
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/spaces/index'});
}]);
