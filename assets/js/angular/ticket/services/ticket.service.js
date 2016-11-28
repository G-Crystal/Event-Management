angular.module('app.ticket')
    .factory('TicketService', function($http, $cookies) {

        var Ticket = {
            add_ticket: function(data) {
                return $http.post('http://staging.ticketvow.com/api/addTicket?token=' + $cookies.token, data);
            },

            edit_ticket: function(data) {
                return $http.post('http://staging.ticketvow.com/api/editTicket?token=' + $cookies.token, data);
            },

            get_ticket_detail: function(data) {
                return $http.post('http://staging.ticketvow.com/api/getTicketDetail?token=' + $cookies.token, data);
            },

            delete_ticket: function(data) {
                return $http.post('http://staging.ticketvow.com/api/deleteTicket?token=' + $cookies.token, data);
            },

            get_ticket_user: function(data) {
                return $http.post('http://staging.ticketvow.com/api/getTicketByUserAndEvent?token=' + $cookies.token, data);
            },

            buy_ticket_details: function(data) {
                return $http.get('http://staging.ticketvow.com/api/buyticket/' + data);
            },

            buy_ticket: function(data) {
                return $http.post('http://staging.ticketvow.com/api/buyticket?token=' + $cookies.token, data);
            },
        };

        return Ticket;
    });