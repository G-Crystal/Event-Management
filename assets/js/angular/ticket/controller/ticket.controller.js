angular.module('app.ticket')
    .controller('BuyTicketController', function($rootScope, $scope, $location, $cookies, TicketService) {

        var myStore = new store();

        $scope.tickets = [
            { ticket_name: 'GENERAL_ADMISSION', created_at: '$152.50', quantity: '' },
            { ticket_name: 'MEET & GREAT', created_at: '$53.50', quantity: '' }
        ];

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }

            $scope.load_datas();
        };

        $scope.logout = function() {
            $location.path('/log_in');
        }

        // Load Initial Datas
        $scope.load_datas = function() {
            // Call Event Detail function
            $scope.event_id = ($rootScope.event_id && $rootScope.event_id != '') ? $rootScope.event_id : '';
            $rootScope.event_id = '';

            $scope.load_buy_ticket_detail();
        }

        // Load Buy Ticket Detail
        $scope.load_buy_ticket_detail = function() {
            var ticketData = $scope.event_id;

            TicketService.buy_ticket_details(ticketData).then(function(response) {
                var data = response.data;
                console.log(data.message);
                if (data.status_code == 200) {
                    $scope.datas = data.data;
                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {
                    $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
                }
            }).catch(function(error) {
                console.log(error);
            });
        }

        // Event handler for Link of Event Detail
        $scope.event_details = function(event_id = '') {
            $rootScope.event_id = event_id;
            $location.path('/event_details');
        }

        // Event handler for Link of Event Detail
        $scope.buyTicket = function(event_id = '') {
            var quantityarray = [];
            angular.forEach($scope.tickets, function(ticket) {
                quantityarray.push(ticket.quantity);
            });
            console.log(quantityarray);

            var ticketData = {
                token: $cookies.token,
                event_id: event_id,
                tickets: quantityarray,
                quantity: quantityarray,
                delivery: quantityarray
            };

            TicketService.buy_ticket(ticketData).then(function(response) {
                var data = response.data;
                console.log(data.message);
                if (data.status_code == 200) {
                    $scope.datas = data.data;
                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {
                    $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
                }
            }).catch(function(error) {
                console.log(error);
            });
        }

        $scope.init();
    })

.controller('TicketController', function($scope, $location, $cookies, TicketService) {

    var myStore = new store();

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.ticket_types = myStore.ticket_type;
        $scope.delivery_types = myStore.delivery_type;
        $scope.events = myStore.events;
        $scope.ticket_type = 0;
        $scope.delivery_type = 0;
    };

    $scope.logout = function() {
        $location.path('/log_in');
    }

    $scope.add_ticket = function() {
        var ticketData = {
            ticket_name: $scope.ticket_name,
            quantity: $scope.quantity,
            ticket_description: $scope.description,
            delivery_type: $scope.delivery_type,
            ticket_type: $scope.ticket_type,
            ticket_cost: $scope.price
        };

        TicketService.add_ticket(ticketData).then(function(response) {
            var data = response.data;
            console.log(data);
            if (data.status_code == 200) {

            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };
})

.controller('EditTicketController', function($rootScope, $scope, $location, $cookies, $modalInstance, TicketService) {

    var myStore = new store();

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.ticket_id = ($rootScope.ticket_id && $rootScope.ticket_id != '') ? $rootScope.ticket_id : '';
        $rootScope.ticket_id = '';
        $scope.ticket_types = myStore.ticket_type;
        $scope.delivery_types = myStore.delivery_type;

        $scope.get_ticket_detail();
    };

    $scope.logout = function() {
        $location.path('/log_in');
    }

    $scope.get_ticket_detail = function() {
        ticketData = {
            id: $scope.ticket_id
        };

        TicketService.get_ticket_detail(ticketData).then(function(response) {
            var data = response.data;
            console.log(data.message);
            if (data.status_code == 200) {
                $scope = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    }

    $scope.edit_ticket = function() {
        var ticketData = {
            editTicketId: $scope.ticket_id,
            ticket_name: $scope.ticket_name,
            quantity: $scope.quantity,
            ticket_description: $scope.description,
            delivery_type: $scope.delivery_type,
            ticket_type: $scope.ticket_type,
            ticket_cost: $scope.price
        };

        TicketService.edit_ticket(ticketData).then(function(response) {
            var data = response.data;
            console.log(data);
            if (data.status_code == 200) {
                $scope = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
                $modalInstance.close();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    $scope.init();
});