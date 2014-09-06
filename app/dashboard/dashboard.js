'use strict';

angular.module('app.dashboard', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
  .state('app.dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });


})

.controller('DashboardCtrl', function() {

});