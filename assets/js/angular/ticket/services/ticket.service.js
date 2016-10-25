angular.module('app.ticket')
    .factory('TicketService', function($http, $cookies) {

        var Ticket = {
            add_ticket: function(data) {
                return $http.post('http://staging.ticketvow.com/api/addTicket?token=' + $cookies.token, data);
            },

            edit_ticket: function(data) {
                return $http.post('http://staging.ticketvow.com/api/editTicket?token=' + $cookies.token, data);
            },

            buy_ticket_details: function(data) {
                return $http.get('http://staging.ticketvow.com/api/buyticket/' + data);
            },

            buy_ticket: function(data) {
                return $http.post('http://staging.ticketvow.com/api/buyticket', data);
            },
        };

        return Ticket;
    });