'use strict';

angular.module('app.challenge', [
  'ui.router',
  'ui.bootstrap'
])

.controller('ChallengeModalCtrl', function($scope, $modalInstance, twitter, youtube) {
  $scope.twitter_handle = twitter;
  $scope.youtube_url = youtube;

  $scope.ok = function(amount) {
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});



