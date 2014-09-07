'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'app.dashboard',
  'app.account',
  'app.challenge',
  'app.donate',
  'resources',
  'auth0'
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

  $locationProvider.hashPrefix('!');//.html5Mode(true);
})

.config(function(authProvider, $httpProvider) {

  authProvider.init({
    domain: 'challengewithfriends.auth0.com',
    clientId: 'FiE9HeGV1rmknSjq6wQOYOU7VTMFXYaI',
    clientID: 'FiE9HeGV1rmknSjq6wQOYOU7VTMFXYaI'
    // loginUrl: '/login',
    // callbackUrl: location.href
  });

  // This automatically adds the token in every request
  $httpProvider.interceptors.push('authInterceptor');

})

.run(function($rootScope, $stateParams, auth) {
  $rootScope.$stateParams = $stateParams;
  auth.hookEvents();
})


.controller('NavbarCtrl', function($scope, auth) {
  var social = [
    'paypal',
    // 'google-oauth2',
    'twitter'
    // 'Username-Password-Authentication'
  ];

  $scope.signin = function() {
    auth.signin({
     connections: social,
      popup: true,
      icon: false,
      showIcon: false
    }, function() {
      // $location.path('/user-info')

    }, function(err) {
      console.log('Error :(', err);
    });
  };


})

.controller('AppCtrl', function() {


})

.controller('FooterCtrl', function() {

});
