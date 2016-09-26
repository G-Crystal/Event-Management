angular.module('app.user')
  .controller('UserController', function ($scope, UserService) {

    $scope.login = function () {
      var loginData = {
        username: $scope.email, 
        password: $scope.password
      };

      UserService.login(loginData).then(function (data) {
        console.log(data);
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.reset = function () {
      
    };

    $scope.signup = function () {
      
    };

});
