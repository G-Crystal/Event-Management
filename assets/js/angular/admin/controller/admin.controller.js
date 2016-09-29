angular.module('app.admin')
  .controller('AdminController', function ($scope, AdminService) {

    $scope.login = function () {
      var loginData = {
        username: $scope.email, 
        password: $scope.password
      };

      AdminService.login(loginData).then(function (data) {
        console.log(data);
      }).catch(function(error) {
        console.log(error);
      });
    };

});
