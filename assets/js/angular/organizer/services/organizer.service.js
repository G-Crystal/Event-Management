angular.module('app.organizer')
  .factory('OrganizerService', function($http) {

    var Organizer = {
      signup: function(data) {debugger;
        return $http.post('http://ticketvow.com/api/registerOrganizer', data).then(function (res) {
          Organizer = res.data;
        })
      },

    };

    return Organizer;
  });