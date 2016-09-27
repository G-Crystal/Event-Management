angular.module('app.admin')
  .factory('AdminService', function($http) {

    var Admin = {
      login: function(data) {
        return $http.post('http://ticketvow.com/api/login', data).then(function (res) {
          Admin = res.data;
        })
      },

      signup: function(data) {
        return $http.post('http://ticketvow.com/api/register', data).then(function (res) {
          Admin = res.data;
        })
      },

      reset: function(data) {
        return $http.post('http://ticketvow.com/api/fogot', data).then(function (res) {
          Admin = res.data;
        })
      },

    };

    return Admin;
  });