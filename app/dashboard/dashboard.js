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

.controller('DashboardCtrl', function($scope, $modal) {

  $scope.awareness = {
    name: 'Yolo Swag',
    org: 'Swag Org'
  };

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

  $scope.awarenessVideo = 'sMKoNBRZM1M';

  // should be csss nth-child
  $scope.isLine = function(index) {
    return index % 4 === 3;
  };

  $scope.completed = {
    donated: [
      {
        name: 'Patrick',
        ammount: '5677'
      },
      {
        name: 'Jack Ryder',
        ammount: '456'
      },
      {
        name: 'Yolo Swag',
        ammount: '879'
      },
      {
        name: 'Yolo Swag',
        ammount: '879'
      },
      {
        name: 'Yolo Swag',
        ammount: '879'
      },
      {
        name: 'Yolo Swag',
        ammount: '879'
      }
    ],
    youtubes: [
      { image: 'bQVoAWSP7k4'},
      { image: 'bQVoAWSP7k4'},
      { image: 'bQVoAWSP7k4'},
      { image: 'bQVoAWSP7k4'},

      { image: 'bQVoAWSP7k4'},
      { image: 'bQVoAWSP7k4'},
      { image: 'bQVoAWSP7k4'},
      { image: 'bQVoAWSP7k4'}
    ]
  };

});