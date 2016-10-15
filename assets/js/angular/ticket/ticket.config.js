angular.module('app.ticket', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/buy_ticket', {
        templateUrl: 'view/partials/ticket/buy_ticket.html',
        controller: 'TicketController'
      });
  }])
