'use strict';

angular.module('myApp.view2', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
  .state('dashboard', {
    url: '/view2',
    templateUrl: '/view2/view2.html',
    controller: 'View2Ctrl'
  });


})

.controller('View2Ctrl', function() {

});