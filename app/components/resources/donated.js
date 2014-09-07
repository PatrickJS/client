'use strict';

angular.module('Donated', [])

.factory('Donated', function(Firebase, $firebase) {
  var ref = new Firebase('https://ChallengeWithFriends.firebaseio.com/dontaed');
  // create an AngularFire reference to the data
  return $firebase(ref);
});