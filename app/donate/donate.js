'use strict';

angular.module('app.donate', [
  'ui.router',
  'ui.bootstrap'
])

.controller('DonateModalCtrl', function($rootScope, $scope, $modalInstance, $timeout, twitter) {
  $scope.ok = function(amount) {
    var form = $('#paypalform');
    form.find('[name="amount"]').val(amount);
    form.find('[name="notify_url"]').val([
      'http://challengewithfriends.com/paid', twitter, amount].join('/'));
    form.find('button').click();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});