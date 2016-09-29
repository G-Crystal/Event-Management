angular.module('app.user')
  .controller('UserController', function ($scope, $location, UserService) {

    $scope.login = function () {
      var loginData = {
        username: $scope.email, 
        password: $scope.password
      };

      UserService.login(loginData).then(function (data) {
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.token);
          $location.path('/');
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.signup = function () {
      var registerData = {
        first_name: $scope.first_name, 
        last_name: $scope.last_name, 
        username: $scope.email, 
        password: $scope.password
      };

      UserService.signup(registerData).then(function (data) {
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.token);
          $location.path('/');
        } {
          console.log(data.status);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.reset = function () {
      var resetData = {
        username: $scope.email
      };

      UserService.reset(resetData).then(function (data) {
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.token);
          $location.path('/');
        } else {
          console.log(data.status);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

});
