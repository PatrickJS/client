angular.module('resources', [
  'Awareness',
  'Challenges',
  'Donated',
  'Accepted',
  'Completed'
])
.value('Firebase', window.Firebase);