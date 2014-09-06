'use strict';

angular.module('app.view1', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
  .state('app.home', {
    url: '/home',
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
})

.controller('View1Ctrl', [function() {

}]);