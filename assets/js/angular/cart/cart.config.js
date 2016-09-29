angular.module('app.cart', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/cart', {
        templateUrl: 'view/partials/cart/cart.html',
        controller: 'CartController'
      });
  }])