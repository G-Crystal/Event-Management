angular.module('app.user')
  .factory('UserService', function($http) {

    var User = {
      login: function(data) {
        return $http.post('http://ticketvow.com/api/login', data).then(function (res) {
          return User = res.data;
        })
      },

      signup: function(data) {
        if( data.password.new != data.password.confirm ) {
          return false;
        }

        return $http.post('http://ticketvow.com/api/register', data).then(function (res) {
          return User = res.data;
        })
      },

      reset: function(data) {
        debugger;
        return $http.post('http://ticketvow.com/api/forgot', data).then(function (res) {
          return User = res.data;
        })
      },

    };

    return User;
  });