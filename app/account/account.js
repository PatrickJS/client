'use strict';

angular.module('app.account', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
  .state('app.account', {
    url: '/account',
    templateUrl: 'account/account.html',
    controller: 'AccountCtrl'
  });
})

.controller('AccountCtrl', [function() {

}]);