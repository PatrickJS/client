angular.module('resources', [
  'Awareness',
  'Challenges',
  'Donated',
  'Accepted'
])
.value('Firebase', window.Firebase);