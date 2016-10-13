angular.module('app.ticket')
  .factory('TicketService', function($http, $cookies) {

    var Ticket = {
      add_ticket: function(data) {
        return $http.post('http://staging.ticketvow.com/api/addTicket?token=' + $cookies.token, data);
      },

      edit_ticket: function(data) {
        return $http.post('http://staging.ticketvow.com/api/editTicket?token=' + $cookies.token, data);
      },

    };

    return Ticket;
  });