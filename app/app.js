'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'app.dashboard',
  'app.account'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      views: {
        'navbar': {
          templateUrl: 'layout/navbar.html',
          controller: 'NavbarCtrl'
        },
        'main': {
          templateUrl: 'app.html',
          controller: 'AppCtrl'
        },
        'footer': {
          templateUrl: 'layout/footer.html',
          controller: 'FooterCtrl'
        }
      }
    });

  $urlRouterProvider
    // .when('', '/home')
    .otherwise('/dashboard');

  $locationProvider.hashPrefix('!')//.html5Mode(true);
})


.controller('NavbarCtrl', function() {

})

.controller('AppCtrl', function() {

})

.controller('FooterCtrl', function() {

});
