angular.module('app.ticket', ['angularTrix'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/buy_ticket', {
                templateUrl: 'view/partials/ticket/buy_ticket.html',
                controller: 'BuyTicketController'
            });
    }])