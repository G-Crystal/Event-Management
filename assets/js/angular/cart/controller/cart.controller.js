angular.module('app.cart')
  .controller('CartController', function ($rootScope, $scope, $location, $modal, $cookies, CartService) {

    var myStore = new store();
    
    $scope.init = function() {
      if(typeof($cookies.token) == 'undefined' || $cookies.token == '') {
        $scope.logout();
        return false;
      }

      $scope.cart_events = myStore.cart_events;
      $scope.cart_tickets = myStore.cart_tickets;
    };

    $scope.logout = function() {
      $cookies = '';
      $location.path('/log_in');
    }

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
        qty: $scope.quantity
      };

      CartService.update(cartData).then(function (data) {
        console.log(data);
        if( data.status_code == 200 ) {
          
        } else if( data.status_code == 101 ) {
          $scope.logout();
        } else {
          
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.event_details = function (event_id = '') {
      $rootScope.event_id = event_id;
      $location.path('/event_details');
    }

    $scope.init();

});
