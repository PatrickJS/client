'use strict';

angular.module('Completed', [])

.factory('Completed', function(Firebase, $firebase) {
  var ref = new Firebase('https://ChallengeWithFriends.firebaseio.com/completed');
  // create an AngularFire reference to the data
  return $firebase(ref);
});