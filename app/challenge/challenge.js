'use strict';

angular.module('app.challenge', [
  'ui.router',
  'ui.bootstrap'
])

.controller('ChallengeModalCtrl', function($scope, $modalInstance, $sce, youtubeEmbedUtils, twitter, youtube) {
  $scope.twitter_handle = twitter;
  $scope.youtube_url = youtube;

  $scope.trustSrc = function(youtube_id) {
    var id = youtubeEmbedUtils.getIdFromURL(youtube_id) || youtube_id;
    var src = '//www.youtube.com/embed/' + id + '?rel=0';
    return $sce.trustAsResourceUrl(src);
  };

  $scope.ok = function() {
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});



