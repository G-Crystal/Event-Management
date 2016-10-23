angular.module('app.user', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/log_in', {
        templateUrl: 'view/partials/user/log_in.html',
        controller: 'LoginController'
      })
      .when('/sign_up', {
        templateUrl: 'view/partials/user/sign_up.html',
        controller: 'SignupController'
      })
      .when('/reset', {
        templateUrl: 'view/partials/user/reset_password.html',
        controller: 'ResetController'
      })
      .when('/forgot', {
        templateUrl: 'view/partials/user/forgot.html',
        controller: 'ForgotController'
      });
  }])