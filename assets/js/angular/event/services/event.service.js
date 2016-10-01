angular.module('app.event')
  .factory('EventService', function($http) {

    var Event = {
      event_details: function(data) {
        return $http.get('http://ticketvow.com/api/event/id', data).then(function (res) {
          return Event = res.data;
        })
      },

      event_category: function(data) {
        return $http.get('http://ticketvow.com/api/getEventCategory', data).then(function (res) {
          return Event = res.data;
        })
      },

    };

    return Event;
  });