angular.module('app.cart')
  .controller('CartController', function ($scope, $modal, CartService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.cart_events = myStore.cart_events;
      $scope.cart_tickets = myStore.cart_tickets;
    };

    $scope.edit = function(index) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'view/partials/cart/cart_edit.html', 
        controller: 'CartController',
        size: 'lg'
      });
    };

    $scope.makePayment = function() {
    };
    
    $scope.update = function () {
      var cartData = {
        qty: $quantity
      };

      CartService.update(cartData).then(function (data) {
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.init();

});
