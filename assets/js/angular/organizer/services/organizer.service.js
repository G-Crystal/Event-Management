angular.module('app.organizer')
  .factory('OrganizerService', function($http, $cookies) {

    var Organizer = {
      signup: function(data) {
        return $http.post('http://staging.ticketvow.com/api/registerOrganizer', data);
      },

      get_profile: function() {
        return $http.get('http://staging.ticketvow.com/api/getProfile?token=' + $cookies.token).success(function (res) {
          Organizer = res.data;
        })
      },

    };

    return Organizer;
  });