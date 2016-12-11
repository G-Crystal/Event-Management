angular.module('app.user')
    .factory('UserService', function($http, $cookies) {

        var User = {
            login: function(data) {
                return $http.post('http://staging.ticketvow.com/api/login', data).then(function(res) {
                    return User = res.data;
                })
            },

            signup: function(data) {
                return $http.post('http://staging.ticketvow.com/api/register', data).then(function(res) {
                    return User = res.data;
                })
            },

            reset: function(data) {
                return $http.post('http://staging.ticketvow.com/api/reset', data).then(function(res) {
                    return User = res.data;
                })
            },

            forgot: function(data) {
                return $http.post('http://staging.ticketvow.com/api/forgot', data).then(function(res) {
                    return User = res.data;
                })
            },

            get_profile: function() {
                return $http.get('http://staging.ticketvow.com/api/getProfile?token=' + $cookies.token).success(function(res) {
                    User = res.data;
                })
            },

            update_profile: function(data) {
                return $http.post('http://staging.ticketvow.com/api/updateProfile?token=' + $cookies.token, data).success(function(res) {
                    User = res.data;
                })
            },

            update_password: function(data) {
                return $http.post('http://staging.ticketvow.com/api/updatePassword?token=' + $cookies.token).success(function(res) {
                    User = res.data;
                })
            },

        };

        return User;
    });