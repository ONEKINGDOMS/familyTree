'use strict';

// Declare app level module which depends on views, and components
angular.module('familyTree', [
  'ngRoute',
  'familyTree.home',
  'familyTree.family',
    'familyTree.friends',
    'familyTree.chats',
    'familyTree.settings'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
    }).when('/family', {
        templateUrl: 'family/family.html',
        controller: 'familyCtrl'
    }).when('/friends', {
      templateUrl: 'friends/friends.html',
      controller: 'friendsCtrl'
  }).when('/chats', {
      templateUrl: 'chats/chats.html',
      controller: 'chatsCtrl'
  }).when('/settings', {
      templateUrl: 'settings/settings.html',
      controller: 'settingsCtrl'
  }).otherwise({redirectTo: '/home'});
}]);
