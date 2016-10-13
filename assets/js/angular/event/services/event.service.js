angular.module('app.event')
  .factory('EventService', function($http) {

    var Event = {
      event_details: function(data) {
        return $http.get('http://staging.ticketvow.com/api/event/id', data);
      },

      event_category: function(data) {
        return $http.get('http://staging.ticketvow.com/api/getEventCategory', data);
      },

      publish: function(data) {
        return $http.post('http://staging.ticketvow.com/api/addevent', data);
      },

      search_event: function(data) {
        return $http.get('http://staging.ticketvow.com/api/getSearchEvent', data);
      },

      featured_event: function() {
        return $http.get('http://staging.ticketvow.com/api/getFeaturedEvent');
      },

    };

    return Event;
  });