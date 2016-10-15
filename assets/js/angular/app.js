var app = angular.module('angula', [
  'ngRoute',
  'ngCookies',
  'ngAnimate',
  'ui.bootstrap',
  'ngMaterial',
  'ngFileUpload',
  'ui.bootstrap.datetimepicker',
  'angularTrix',
  'app.user',
  'app.organizer',
  'app.event',
  'app.cart',
  'app.venue',
  'app.talent',
  'app.report',
  'app.ticket',
  'app.order'
]);

app.config(['$routeProvider', function ($routeProvider) {
  'use strict';
  $routeProvider.otherwise({
    redirectTo: '/404'
  });
}]);