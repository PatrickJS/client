'use strict';

angular.module('app.accept', [
  'ui.router',
  'ui.bootstrap'
])

.controller('AcceptModalCtrl', function($scope, $modalInstance, twitter) {
  $scope.twitter_handle = twitter;

  $scope.ok = function(amount) {
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});



