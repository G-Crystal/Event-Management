angular.module('app.venue', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/venue_profile', {
                templateUrl: 'view/partials/venue/venue_profile.html',
                controller: 'VenueController'
            });
    }])