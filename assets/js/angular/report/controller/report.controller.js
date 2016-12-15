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

        $scope.selectedEvent = 'All Events';

        $scope.get_order_filter_event();
        $scope.get_recent_order();
    };

    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    };

    $scope.changeEvent = function(selectedEvent) {
        $scope.selectedEvent = selectedEvent;
        $scope.event_id = $scope.selectedEvent.split(' | ')[0];
        $scope.get_recent_order();
    };

    $scope.get_order_filter_event = function() {
        ReportService.get_order_filter_event().then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.events = data.data;
                $scope.get_recent_order();
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
        reqData.event_id = ($scope.selectedEvent != 'All Events') ? $scope.event_id : '';

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
})

.controller('SaleBoxController', function($scope, $location, $cookies, ReportService) {

    var myStore = new store();

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.selectedEvent = 'All Events';

        $scope.get_order_filter_event();
        $scope.get_sale_box();

        $scope.datas = {
            tickets: [
                {name: "GENERAL ADMISSION", available_qty: 300, price: "$2.00", qty: 0},
                {name: "GENERAL ADMISSION2", available_qty: 400, price: "$0.00", qty: 3},
                {name: "GENERAL ADMISSION3", available_qty: 100, price: "$1.00", qty: 2}
            ],
            sale_tickets: [
                {event_name: "LIFE OF PABLO TOUR", created_at:"10/29/16 9:00 PM EST", name: "GENERAL ADMISSION", qty: 1, price: "$0.00", fees: "$0.00", subtotal: "0.00"},
                {event_name: "LIFE OF PABLO TOUR2", created_at:"10/29/16 9:00 PM EST", name: "GENERAL ADMISSION2", qty: 2, price: "$2.00", fees: "$0.00", subtotal: "0.00"},
                {event_name: "LIFE OF PABLO TOUR3", created_at:"10/29/16 9:00 PM EST", name: "GENERAL ADMISSION3", qty: 4, price: "$0.00", fees: "$0.00", subtotal: "0.00"},
                {event_name: "LIFE OF PABLO TOUR4", created_at:"10/29/16 9:00 PM EST", name: "GENERAL ADMISSION4", qty: 3, price: "$4.00", fees: "$0.00", subtotal: "0.00"}
            ],
        };
    };

    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    };

    $scope.changeEvent = function(selectedEvent) {
        $scope.selectedEvent = selectedEvent;
        $scope.event_id = $scope.selectedEvent.split(' | ')[0];
        $scope.get_sale_box();
    };

    $scope.get_order_filter_event = function() {
        ReportService.get_order_filter_event().then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.events = data.data;
                $scope.get_sale_box();
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.get_sale_box = function() {
        var reqData = {};
        reqData.event_id = ($scope.selectedEvent != 'All Events') ? $scope.event_id : '';

        ReportService.get_sale_box(reqData).then(function(response) {
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
})

.controller('CompBoxController', function($scope, $location, $cookies, ReportService) {

    var myStore = new store();

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.selectedEvent = 'All Events';

        $scope.get_order_filter_event();
        // $scope.get_comp_box();

        $scope.datas = {
            tickets: [
                {name: "GENERAL ADMISSION", available_qty: 300, price: "$2.00", qty: 0},
                {name: "GENERAL ADMISSION2", available_qty: 400, price: "$0.00", qty: 3}
            ],
            sale_tickets: [
                {event_name: "LIFE OF PABLO TOUR", created_at:"10/29/16 9:00 PM EST", name: "GENERAL ADMISSION", qty: 1, price: "$0.00", fees: "$0.00", subtotal: "0.00"},
                {event_name: "LIFE OF PABLO TOUR2", created_at:"10/29/16 9:00 PM EST", name: "GENERAL ADMISSION", qty: 1, price: "$0.00", fees: "$0.00", subtotal: "0.00"}
            ],
        };
    };

    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    };

    $scope.changeEvent = function(selectedEvent) {
        $scope.selectedEvent = selectedEvent;
        $scope.event_id = $scope.selectedEvent.split(' | ')[0];
        $scope.get_comp_box();
    };

    $scope.get_order_filter_event = function() {
        ReportService.get_order_filter_event().then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.events = data.data;
                $scope.get_comp_box();
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.get_comp_box = function() {
        var reqData = {};
        reqData.event_id = ($scope.selectedEvent != 'All Events') ? $scope.event_id : '';

        ReportService.get_comp_box(reqData).then(function(response) {
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