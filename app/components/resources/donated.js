'use strict';

angular.module('Donated', [])

.factory('Donated', function(Firebase, $firebase) {
  var ref = new Firebase('https://ChallengeWithFriends.firebaseio.com/donated');
  // create an AngularFire reference to the data
  return $firebase(ref);
});