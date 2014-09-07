'use strict';

angular.module('awareness', [])

.factory('Awareness', function(Firebase, $firebase) {
  var ref = new Firebase('https://ChallengeWithFriends.firebaseio.com/awareness');
  // create an AngularFire reference to the data
  return $firebase(ref);
});