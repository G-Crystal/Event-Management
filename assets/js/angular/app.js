var app = angular.module('angula', [
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate',
  'ngMaterial',
  'ngDialog',
  'ui.bootstrap.datetimepicker',
  'angularTrix',
  'app.user',
  'app.admin',
  'app.organizer',
  'app.event',
  'app.cart'
]);

app.config(['$routeProvider', function ($routeProvider) {
  'use strict';
  $routeProvider.otherwise({
    redirectTo: '/404'
  });
}]);