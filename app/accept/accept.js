'use strict';

angular.module('app.accept', [
  'ui.router',
  'ui.bootstrap'
])

.controller('AcceptModalCtrl', function($scope, $modalInstance, $http, youtubeEmbedUtils, auth, twitter) {
  $scope.twitter_handle = twitter;

  $scope.ok = function(youtube) {
    var youtube_id = youtubeEmbedUtils.getIdFromURL(youtube);
    $modalInstance.close({twitter: twitter, youtube: youtube_id});
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.respond = function(response, youtube) {
    console.log(auth);
    $http.post('/tweet', {
      status: [response, youtube].join(' '),
      token: auth.profile.identities[0].access_token,
      tokenSecret: auth.profile.identities[0].access_token_secret });
  };

  $scope.nominate = function(youtube, handle1, handle2, handle3) {
    var handles = [handle1, handle2, handle3];
    handles = handles.map(function(handle) {
      if (handle) {
        handle.replace(/^@/, '');
        return '@' + handle;
      }
    });
    handles = handles.join(' ');

    $http.post('/tweet', {
      status: [handles, 'You have been challenged!', youtube].join(' '),
      token: auth.profile.identities[0].access_token,
      tokenSecret: auth.profile.identities[0].access_token_secret });
  };
});