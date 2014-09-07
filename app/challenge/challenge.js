'use strict';

angular.module('app.challenge', [
  'ui.router',
  'ui.bootstrap'
])

.controller('ChallengeModalCtrl', function($rootScope, $scope, $modalInstance, $http, $timeout, twitter_handle) {
  $scope.ok = function(amount) {
    var node = angular.element(document.createElement('div'));
    var button = angular.element([
      '<script src="//www.paypalobjects.com/js/external/paypal-button.min.js?merchant=challengewithfriends@gdi2290.com"',
        'data-button="donate"',
        'data-name="Breast Cancer Awareness Month"',
        'data-amount="' + amount + '"',
        'data-currency="USD"',
        'data-callback="http://challengewithfriends.com/paid/' + twitter_handle + '"',
        'data-env="sandbox"',
      '></script>'].join(' '));
    node.append(button);
    angular.element(document.querySelector('div')).append(node);
    // Load the element (using the ng-if in index.html)
    $rootScope.donate = true;

    $timeout(function() {
      node.find('button').click();
    });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});



