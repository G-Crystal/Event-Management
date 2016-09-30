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
          alert('Token String: \n' + data.token);
          $location.path('/');
        } else {
          console.log(data.message);
          alert('Login: ' + data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.signup = function () {
      var registerData = {
        fname: $scope.first_name, 
        lname: $scope.last_name, 
        email: $scope.email, 
        password: $scope.password,
        repassword: $scope.cfm_password
      };

      UserService.signup(registerData).then(function (data) {
        console.log(data);
        alert('Sign up: ' + data.status);
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
        code: $scope.email,
        password: $scope.password,
        newpassword: $scope.newpassword
      };

      UserService.reset(resetData).then(function (data) {
        console.log(data);
        alert('Reset password: ' + data.status);
        if( data.status_code == 200 ) {
          console.log(data.token);
        } else {
          console.log(data.status);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.forgot = function () {
      var reqData = {
        username: $scope.email
      };

      UserService.forgot(reqData).then(function (data) {
        console.log(data);
        alert('Forgot password: ' + data.status);
        if( data.status_code == 200 ) {
          console.log(data.token);
        } else {
          console.log(data.status);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

});
