angular.module('app.report', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/order_report', {
                templateUrl: 'view/partials/report/order_report.html',
                controller: 'OrderReportController'
            })
            .when('/ticket_report', {
                templateUrl: 'view/partials/report/ticket_report.html',
                controller: 'TicketReportController'
            })
            .when('/event_order', {
                templateUrl: 'view/partials/order/recent_order.html',
                controller: 'RecentOrderController'
            })
            .when('/box_office', {
                templateUrl: 'view/partials/report/box_office.html',
                controller: 'BoxOfficeController'
            });
    }])