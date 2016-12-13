angular.module('app.report')
    .controller('OrderReportController', function($scope, $location, $cookies, ReportService, EventService) {

        var myStore = new store();

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }

            $scope.selectedEvent = 'All Events';

            $scope.get_order_filter_event();
            $scope.get_order_report();
        };

        $scope.logout = function() {
            $cookies.token = '';
            $location.path('/log_in');
        };

        $scope.changeEvent = function(selectedEvent) {
            $scope.selectedEvent = selectedEvent;
            $scope.event_id = $scope.selectedEvent.split(' | ')[0];
            $scope.get_order_report();
        };

        $scope.get_order_report = function() {
            var reqData = {};
            reqData.page = 1; //$scope.page;
            reqData.event_id = ($scope.selectedEvent != 'All Events') ? $scope.event_id : '';

            ReportService.get_order_report(reqData).then(function(response) {
                var data = response.data;
                if (data.status_code == 200) {
                    $scope.order_report = data.data;
                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {
                    $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
                }
            }).catch(function(error) {
                $scope.alerts = [{ type: 'danger', msg: error }];
            });
        };

        $scope.get_order_filter_event = function() {
            ReportService.get_order_filter_event().then(function(response) {
                var data = response.data;
                if (data.status_code == 200) {
                    $scope.events = data.data;
                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {
                    $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
                }
            }).catch(function(error) {
                $scope.alerts = [{ type: 'danger', msg: error }];
            });
        };

        $scope.init();
    })

.controller('TicketReportController', function($scope, $location, $cookies, ReportService) {

    var myStore = new store();

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        // $scope.events = myStore.events;
        // $scope.cart_tickets = myStore.cart_tickets;

        $scope.get_order_filter_event();
    };

    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    };

    $scope.changeEvent = function(selectedEvent) {
        $scope.selectedEvent = selectedEvent;
        $scope.get_ticket_report();
    };

    $scope.get_order_filter_event = function() {
        ReportService.get_order_filter_event().then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.events = data.data;
                $scope.get_ticket_report();
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.get_ticket_report = function() {
        var reqData = {};
        if (typeof($scope.selectedEvent) == 'undefined' && $scope.events.length > 0) $scope.selectedEvent = $scope.events[0].id + ' | ' + $scope.events[0].name;
        $scope.event_id = (typeof($scope.selectedEvent) != 'undefined') ? $scope.selectedEvent.split(' | ')[0] : '';
        reqData.id = $scope.event_id;

        ReportService.get_ticket_report(reqData).then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.cart_tickets = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.init();

})

.controller('RecentOrderController', function($scope, $location, $cookies, ReportService) {

    var myStore = new store();

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        // $scope.events = myStore.events;
        // $scope.cart_tickets = myStore.cart_tickets;

        $scope.get_recent_order();
    };

    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    };

    $scope.changeEvent = function(selectedEvent) {
        $scope.selectedEvent = selectedEvent;
        $scope.get_ticket_report();
    };

    $scope.get_order_filter_event = function() {
        ReportService.get_order_filter_event().then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.events = data.data;
                $scope.get_ticket_report();
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.get_recent_order = function() {
        var reqData = {};
        reqData.page = 1; //$scope.page;

        ReportService.get_recent_order(reqData).then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.orders = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.init();

});