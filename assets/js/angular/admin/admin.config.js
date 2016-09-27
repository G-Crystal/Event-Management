angular.module('app.admin', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/log_in', {
        templateUrl: 'view/partials/log_in.html',
        controller: 'AdminController'
      });
  }])