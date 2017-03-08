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
        templateUrl: 'template/home.html',
        controller: 'homeCtrl'
    }).when('/myfamily', {
        templateUrl: 'template/family.html',
        controller: 'familyCtrl'
    }).when('/friends', {
      templateUrl: 'template/friends.html',
      controller: 'friendsCtrl'
  }).when('/chats', {
      templateUrl: 'template/chats.html',
      controller: 'chatsCtrl'
  }).when('/settings', {
      templateUrl: 'template/settings.html',
      controller: 'settingsCtrl'
  }).otherwise({redirectTo: '/home'});
}]);
