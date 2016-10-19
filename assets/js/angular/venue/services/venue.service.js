angular.module('app.venue')
  .factory('VenueService', function($http) {

    var Venue = {

      get_venue: function(data) {
        return $http.get('http://staging.ticketvow.com/api/getVenue', data).success(function (res) {
          Venue = res.data;
        })
      },

      get_venue_detail: function(data) {
        return $http.get('http://staging.ticketvow.com/api/getVenueDetail', data).success(function (res) {
          Venue = res.data;
        })
      },

    };

    return Venue;
  });