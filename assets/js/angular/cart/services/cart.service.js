angular.module('app.cart')
  .factory('CartService', function($http) {

    var Cart = {
      update: function(data) {
        return $http.post('http://staging.ticketvow.com/api/cart_update', data).then(function (res) {
          return Cart = res.data;
        })
      },

    };

    return Cart;
  });