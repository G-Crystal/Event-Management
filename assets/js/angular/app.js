var app = angular.module('angula', [
  'ngRoute',
  'ngCookies',
  'ui.bootstrap',
  'ngAnimate',
  'ngMaterial',
  'ngDialog',
  'ui.bootstrap.datetimepicker',
  'angularTrix',
  'app.user',
  'app.organizer',
  'app.event',
  'app.cart',
  'app.venue',
  'app.talent',
  'app.report',
  'app.ticket'
]);

app.config(['$routeProvider', function ($routeProvider) {
  'use strict';
  $routeProvider.otherwise({
    redirectTo: '/404'
  });
}]);