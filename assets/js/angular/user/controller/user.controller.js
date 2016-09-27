angular.module('app.user')
  .controller('UserController', function ($scope, $location, UserService) {

    $scope.login = function () {
      var loginData = {
        username: $scope.email, 
        password: $scope.password
      };

      UserService.login(loginData).then(function (data) {debugger;
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.token);
          $location.path('/');
        } else if( data.status_code == 2 ) {

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

      UserService.signup(registerData).then(function (data) {debugger;
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.token);
          $location.path('/');
        } else if( data.status_code == 2 ) {

        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.reset = function () {
      var resetData = {
        username: $scope.email
      };

      UserService.reset(resetData).then(function (data) {debugger;
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.token);
          $location.path('/');
        } else if( data.status_code == 2 ) {

        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.event_details = function () {
      var resetData = {
        id: 14
      };

      UserService.event_details(resetData).then(function (data) {debugger;
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.token);
          $location.path('/');
        } else if( data.status_code == 2 ) {

        }
      }).catch(function(error) {
        console.log(error);
      });
    };

});
