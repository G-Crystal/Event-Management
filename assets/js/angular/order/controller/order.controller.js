angular.module('app.order')
  .controller('OrderController', function ($scope, $http, $location, $cookies, OrderService) {
    
    $scope.init = function() {
      if(typeof($cookies.token) == 'undefined' || $cookies.token == '') {
        $scope.logout();
        return false;
      }
    };

    $scope.logout = function() {
      $cookies.token = '';
      $location.path('/log_in');
    }

    $scope.init();

});
