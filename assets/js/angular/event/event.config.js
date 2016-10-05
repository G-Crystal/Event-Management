angular.module('app.event', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/create_event', {
        templateUrl: 'view/partials/event/create_event.html',
        controller: 'EventController'
      })
      .when('/event_details', {
        templateUrl: 'view/partials/event/event_details.html',
        controller: 'EventController'
      })
      .when('/upcoming_events', {
        templateUrl: 'view/partials/event/upcoming_events.html',
        controller: 'EventController'
      })
      .when('/past_events', {
        templateUrl: 'view/partials/event/past_events.html',
        controller: 'EventController'
      })
      .when('/shop', {
        templateUrl: 'view/partials/shop/store.html',
        controller: 'EventController'
      });
  }])
