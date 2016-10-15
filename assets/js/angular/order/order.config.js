angular.module('app.order', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/order_confirm_details', {
        templateUrl: 'view/partials/order/order_confirm_details.html',
        controller: 'OrderController'
      });
  }])
