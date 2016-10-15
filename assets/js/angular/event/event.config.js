angular.module('app.event', ['ngAnimate', 'ui.bootstrap'])
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
      .when('/pagination', {
        templateUrl: 'view/partials/event/pagination.html',
        controller: 'EventController'
      })
      .when('/shop', {
        templateUrl: 'view/partials/shop/store.html',
        controller: 'EventController'
      })
      .when('/user_dashboard', {
        templateUrl: 'view/partials/user/dashboard.html',
        controller: 'EventController'
      });
  }])
