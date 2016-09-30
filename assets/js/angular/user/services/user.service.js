angular.module('app.user')
  .factory('UserService', function($http) {

    var User = {
      login: function(data) {
        return $http.post('http://ticketvow.com/api/login', data).then(function (res) {
          return User = res.data;
        })
      },

      signup: function(data) {
        return $http.post('http://ticketvow.com/api/register', data).then(function (res) {
          return User = res.data;
        })
      },

      reset: function(data) {
        return $http.post('http://ticketvow.com/api/reset', data).then(function (res) {
          return User = res.data;
        })
      },

      forgot: function(data) {
        return $http.post('http://ticketvow.com/api/forgot', data).then(function (res) {
          return User = res.data;
        })
      },

    };

    return User;
  });