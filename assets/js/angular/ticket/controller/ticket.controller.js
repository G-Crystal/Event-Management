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
    }

    $scope.editorConfig = {
        btns: [
            ['viewHTML'],
            ['undo', 'redo'],
            ['formatting'],
            'btnGrp-design', ['link'],
            ['image'],
            'btnGrp-justify',
            'btnGrp-lists', ['foreColor', 'backColor'],
            ['preformatted'],
            ['horizontalRule']
        ]
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
                $scope.formData = data.data;

                angular.forEach($scope.ticket_types, function(ticket_type) {
                    if (ticket_type.name == $scope.formData.ticket_type)
                        $scope.formData.ticket_type = ticket_type;
                });
                angular.forEach($scope.delivery_types, function(delivery_type) {
                    if (delivery_type.name == $scope.formData.deliver_type)
                        $scope.formData.delivery_type = delivery_type;
                });
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
            editTicketId: $scope.formData.id,
            ticket_name: $scope.formData.ticket_name,
            quantity: $scope.formData.quantity,
            ticket_description: $scope.formData.ticket_description,
            delivery_type: $scope.formData.delivery_type.name,
            ticket_type: $scope.formData.ticket_type.name,
            ticket_cost: $scope.formData.ticket_cost
        };

        TicketService.edit_ticket(ticketData).then(function(response) {
            var data = response.data;
            console.log(data);
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

        $modalInstance.close();
    };

    $scope.init();
});