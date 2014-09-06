'use strict';

angular.module('myApp.view2', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
  .state('app.dashboard', {
    url: '/dashboard',
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });


})

.controller('View2Ctrl', function() {

});