'use strict';

angular.module('app.donate', [
  'ui.router',
  'ui.bootstrap'
])

.controller('DonateModalCtrl', function($scope, $modalInstance) {
  $scope.ok = function() {
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});