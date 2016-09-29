angular.module('app.venue')
  .factory('VenueService', function($http) {

    var Venue = {

      get_venue: function(data) {debugger;
        return $http.post('http://ticketvow.com/api/getVenue', data).then(function (res) {
          Venue = res.data;
        })
      },

    };

    return Venue;
  });