angular.module('app.cart')
  .controller('CartController', function ($scope, ngDialog, CartService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.cart_events = myStore.cart_events;
      $scope.cart_tickets = myStore.cart_tickets;
    }

    $scope.edit = function(index) {
      var modalPromise = ngDialog.open({
        template: 'view/partials/cart/cart_edit.html', 
        controller: 'CartController',
        className: 'ngdialog-theme-default', 
        preserveFocus: false, 
        trapFocus: false,
        width: '768px',
        scope: $scope
      });
    }

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
          $location.path('/');
        } else if( data.status_code == 2 ) {

        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.init();

});
