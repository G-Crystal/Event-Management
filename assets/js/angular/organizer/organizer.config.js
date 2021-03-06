angular.module('app.organizer', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/organizer_dashboard', {
                templateUrl: 'view/partials/organizer/organizer_signup.html',
                controller: 'OrganizerController'
            })
            .when('/organizer_signup', {
                templateUrl: 'view/partials/organizer/organizer_signup.html',
                controller: 'CreateOrganizerController'
            })
            .when('/organizer_profile', {
                templateUrl: 'view/partials/organizer/organizer_profile.html',
                controller: 'OrganizerController'
            });
    }])