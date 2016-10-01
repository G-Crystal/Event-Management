angular.module('app.report', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/order_report', {
        templateUrl: 'view/partials/report/order_report.html',
        controller: 'ReportController'
      })
      .when('/ticket_report', {
        templateUrl: 'view/partials/report/ticket_report.html',
        controller: 'ReportController'
      });
  }])