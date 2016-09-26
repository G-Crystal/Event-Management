angular.module('app.organizer', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/log_in', {
        templateUrl: 'view/partials/log_in.html',
        controller: 'UserController'
      })
      .when('/sign_up', {
        templateUrl: 'view/partials/sign_up.html',
        controller: 'UserController'
      })
      .when('/reset', {
        templateUrl: 'view/partials/reset_password.html',
        controller: 'UserController'
      });
  }])