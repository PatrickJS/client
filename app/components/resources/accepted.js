'use strict';

angular.module('Accepted', [])

.factory('Accepted', function(Firebase, $firebase) {
  var ref = new Firebase('https://ChallengeWithFriends.firebaseio.com/accepted');
  // create an AngularFire reference to the data
  return $firebase(ref);
});