angular.module('app.event', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/event_details', {
        templateUrl: 'view/partials/event_details.html',
        controller: 'HomeController'
      });
  }])