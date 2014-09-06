'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ui.router',
  'app.dashboard',
  'app.view1',
  'app.version'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      views: {
        'main': {
          templateUrl: 'app.html',
          controller: 'AppCtrl'
        }
      }
    });

  $urlRouterProvider
    // .when('', '/home')
    .otherwise('/home');

  // $locationProvider.html5Mode(true);
})


.controller('AppCtrl', function() {

});
