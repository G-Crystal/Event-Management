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
            .when('/sale_box', {
                templateUrl: 'view/partials/report/sale_box.html',
                controller: 'SaleBoxController'
            })
            .when('/comp_box', {
                templateUrl: 'view/partials/report/comp_box.html',
                controller: 'CompBoxController'
            });
    }])