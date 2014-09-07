'use strict';

angular.module('app.challenge', [
  'ui.router',
  'ui.bootstrap'
])

.controller('ChallengeModalCtrl', function($scope, $modalInstance, $sce, twitter, youtube) {
  $scope.twitter_handle = twitter;
  $scope.youtube_url = youtube;

  $scope.trustSrc = function(youtube_id) {
    var src = '//www.youtube.com/embed/' + youtube_id + '?rel=0';
    return $sce.trustAsResourceUrl(src);
  };

  $scope.ok = function(amount) {
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});



