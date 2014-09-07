'use strict';

angular.module('app.accept', [
  'ui.router',
  'ui.bootstrap'
])

.controller('AcceptModalCtrl', function($scope, $modalInstance, $http, auth, twitter) {
  $scope.twitter_handle = twitter;

  $scope.ok = function(amount) {
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.respond = function(response, youtube) {
    $http.post('/update', {
      status: [response, youtube].join(' ') });
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

    $http.post('https://api.twitter.com/1.1/statuses.update.json', {
      status: [handles, 'You have been challenged!', youtube].join(' ') });
  };
});