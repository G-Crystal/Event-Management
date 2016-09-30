angular.module('app.organizer')
  .factory('OrganizerService', function($http) {

    var Organizer = {
      signup: function(data) {
        return $http.post('http://ticketvow.com/api/registerOrganizer', data).then(function (res) {
          Organizer = res.data;
        })
      },

      get_profile: function(data) {
        return $http.get('http://ticketvow.com/api/getProfile', data).success(function (res) {
          Organizer = res.data;
        })
      },

    };

    return Organizer;
  });