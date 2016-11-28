angular.module('app.event', ['ngAnimate', 'ui.bootstrap', 'angularTrix'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/create_event', {
                templateUrl: 'view/partials/event/create_event.html',
                controller: 'CreateEventController'
            })
            .when('/event_details', {
                templateUrl: 'view/partials/event/event_details.html',
                controller: 'EventDetailController'
            })
            .when('/upcoming_events', {
                templateUrl: 'view/partials/event/upcoming_events.html',
                controller: 'UpcomingEventController'
            })
            .when('/past_events', {
                templateUrl: 'view/partials/event/past_events.html',
                controller: 'PastEventController'
            })
            .when('/pagination', {
                templateUrl: 'view/partials/event/pagination.html',
                controller: 'EventController'
            })
            .when('/shop', {
                templateUrl: 'view/partials/shop/store.html',
                controller: 'SearchEventController'
            })
            .when('/user_dashboard', {
                templateUrl: 'view/partials/user/dashboard.html',
                controller: 'EventController'
            });
    }])