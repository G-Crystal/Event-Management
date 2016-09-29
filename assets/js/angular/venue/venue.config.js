angular.module('app.venue', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/get_venue', {
        templateUrl: 'view/partials/venue/venue_profile.html',
        controller: 'VenueController'
      })
      .when('/venue_profile', {
        templateUrl: 'view/partials/venue/venue_profile.html',
        controller: 'VenueController'
      });
  }])