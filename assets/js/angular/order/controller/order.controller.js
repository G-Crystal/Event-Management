angular.module('app.order')
    .controller('OrderController', function($scope, $http, $location, $cookies, OrderService) {

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }
        };

        $scope.logout = function() {
            $cookies = '';
            $location.path('/log_in');
        }

        $scope.save = function() {}

        $scope.refundOrder = function() {}

        $scope.resendTicket = function() {}

        $scope.init();

        $scope.trix = "<div>asd</div>";
    });