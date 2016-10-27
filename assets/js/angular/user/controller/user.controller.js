angular.module('app.user')
    .controller('LoginController', function($scope, $location, $cookies, UserService) {

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }
        };

        $scope.logout = function() {
            $cookies.token = '';
            $location.path('/log_in');
        }

        $scope.login = function() {
            var loginData = {
                username: $scope.email,
                password: $scope.password
            };

            UserService.login(loginData).then(function(data) {
                if (data.status_code == 200) {
                    $cookies.token = data.token;
                    $location.path('/');
                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {
                    $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
                }
            }).catch(function(error) {
                $scope.alerts = [{ type: 'danger', msg: error }];
            });
        };

    })

.controller('SignupController', function($scope, $location, $cookies, UserService) {

    $scope.signup = function() {
        var registerData = {
            fname: $scope.first_name,
            lname: $scope.last_name,
            email: $scope.email,
            password: $scope.password,
            repassword: $scope.cfm_password
        };

        UserService.signup(registerData).then(function(data) {
            if (data.status_code == 200) {
                $location.path('/log_in');
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

})

.controller('ResetController', function($scope, $location, $cookies, UserService) {

    $scope.reset = function() {
        var resetData = {
            code: $scope.email,
            password: $scope.password,
            repassword: $scope.repassword
        };

        UserService.reset(resetData).then(function(data) {
            if (data.status_code == 200) {

            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

})

.controller('ForgotController', function($scope, $location, $cookies, UserService) {

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }
    };

    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    }

    $scope.forgot = function() {
        var reqData = {
            username: $scope.email
        };

        UserService.forgot(reqData).then(function(data) {
            if (data.status_code == 200) {

            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.init();

});