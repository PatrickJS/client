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

.controller('DashboardCtrl', function($scope, $modal, Completed, Donated, Accepted) {

  $scope.challenge = function() {
   var challenge = $modal.open({
      // there is no templateProvider but you can return a promise
      templateUrl: 'challenge/challenge.html',
      controller: 'ChallengeModalCtrl',
      size: 'lg',
      resolve: {
      }

    });
    challenge.result.then(function() {

    })['catch'](function() {

    });
  };

  $scope.donate = function() {
   var donateModal = $modal.open({
      // there is no templateProvider but you can return a promise
      templateUrl: 'donate/donate.html',
      controller: 'DonateModalCtrl',
      size: 'lg',
      resolve: {
      }

    });
    donateModal.result.then(function() {

    })['catch'](function() {

    });
  };

  $scope.donated  = Donated.$asArray();
  $scope.accepted = Accepted.$asArray();

});