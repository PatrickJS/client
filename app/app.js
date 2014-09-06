'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
     views: {
      'main': {
        templateUrl: '/app.html',
        controller: 'AppCtrl'
      }
    }
    });

  $urlRouterProvider
    // .when('', '/home')
    .otherwise('/home');

})


.controller('AppCtrl', function() {

});
