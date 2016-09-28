angular.module('app.admin', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/admin_event_order', {
        templateUrl: 'view/partials/log_in.html',
        controller: 'AdminController'
      });
  }])