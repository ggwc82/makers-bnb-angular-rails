'use strict';

var makersBnB = angular.module('makersBnB', ['ngRoute','makersBnB',
]).

config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    controller: 'SpacesCtrl',
    templateUrl: 'spaces/default-spaces.html'
    })
  
  .when('/new', {
  	controller: 'SpacesCtrl',
  	templateUrl: 'spaces/add-new-space.html'
  })

  .when('/spaces/:id', {
  	controller: 'SpacesCtrl',
  	templateUrl: 'spaces/show-space.html'
  })
  
  //.otherwise('/');

}])




