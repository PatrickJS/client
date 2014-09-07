'use strict';

angular.module('app.dashboard', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
  .state('app.dashboard', {
    url: '/dashboard?twitter&youtube',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl',
    // resolve: {
    //   challenge: function($stateParams) {
    //     return ($stateParams.twitter && $stateParams.youtube) && $stateParams;
    //   }
    // },
    //
    onEnter: function($modal, $stateParams) {
      if ($stateParams.twitter && $stateParams.youtube) {

        var challenge = $modal.open({
          // there is no templateProvider but you can return a promise
          templateUrl: 'challenge/challenge.html',
          controller: 'ChallengeModalCtrl',
          size: 'lg',
          resolve: {
            twitter: function() {
              return $stateParams.twitter || null;
            },
            youtube: function() {
              return $stateParams.youtube || null;
            }
          }

        });
        challenge.result.then(function() {

        })['catch'](function() {

        });

      } // end if
    } // end enter
  });


})

.controller('DashboardCtrl', function($scope, $stateParams, $modal, Donated, Accepted) {

  $scope.twitter_handle = $stateParams.twitter;
  $scope.youtube_url = $stateParams.youtube;



  $scope.challenge = function(twitter, youtube) {
   var challenge = $modal.open({
      // there is no templateProvider but you can return a promise
      templateUrl: 'challenge/challenge.html',
      controller: 'ChallengeModalCtrl',
      size: 'lg',
      resolve: {
        twitter: twitter || null,
        youtube: youtube || null
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

  $scope.awarenessVideo = '-DdslyCHZX0';

  $scope.donated  = Donated.$asArray();
  $scope.accepted = Accepted.$asArray();

});