angular.module('app.user')
  .controller('UserController', function ($scope, $location, $cookies, UserService) {
    
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

    $scope.login = function () {
      var loginData = {
        username: $scope.email, 
        password: $scope.password
      };

      UserService.login(loginData).then(function (data) {
        if( data.status_code == 200 ) {
          $cookies.token = data.token;
          $location.path('/');
        } else if( data.status_code == 101 ) {
          $scope.logout();
        } else {
          $scope.alerts = [{type: 'danger', msg: data.message}];
        }
      }).catch(function(error) {
        $scope.alerts = [{type: 'danger', msg: error}];
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
        if( data.status_code == 200 ) {
          $location.path('/log_in');
        } else if( data.status_code == 101 ) {
          $scope.logout();
        } else {
          $scope.alerts = [{type: 'danger', msg: data.message}];
        }
      }).catch(function(error) {
        $scope.alerts = [{type: 'danger', msg: error}];
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
        console.log('Reset password: ' + data.status);
        if( data.status_code == 200 ) {
          console.log(data.token);
        } else if( data.status_code == 101 ) {
          $scope.logout();
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
        console.log('Forgot password: ' + data.status);
        if( data.status_code == 200 ) {
          
        } else if( data.status_code == 101 ) {
          $scope.logout();
        } else {
          
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

});
