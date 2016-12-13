angular.module('app.report')
    .controller('OrderReportController', function($scope, $location, $cookies, ReportService, EventService) {

        var myStore = new store();

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }

            $scope.events = myStore.events;
            $scope.order_report = myStore.order_report;
            $scope.selectedEvent = 'All Events';

            $scope.get_order_report();
        };

        $scope.logout = function() {
            $cookies.token = '';
            $location.path('/log_in');
        };

        $scope.changeEvent = function(selectedEvent) {
            $scope.selectedEvent = selectedEvent;
        };

        $scope.get_order_report = function() {
            var reqData = {
                // page: $scope.page,
                // event_id: $scope.event_id
            };

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

        $scope.init();
    })

.controller('TicketReportController', function($scope, $location, $cookies, ReportService) {

    var myStore = new store();

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.events = myStore.events;
        $scope.cart_tickets = myStore.cart_tickets;
    };

    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    }

    $scope.changeEvent = function(selectedEvent) {
        $scope.selectedEvent = selectedEvent;
    }

    $scope.selectedEvent = 'All Events';

    $scope.init();

});