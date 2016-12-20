angular.module('app.user')
    .controller('LoginController', function($scope, $location, $cookies, UserService) {

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }
        };

        $scope.logout = function() {
            $cookies = '';
            $location.path('/log_in');
        };

        $scope.login = function() {
            var loginData = {
                username: $scope.email,
                password: $scope.password
            };

            UserService.login(loginData).then(function(data) {
                if (data.status_code == 200) {
                    $cookies.token = data.token;
                    $cookies.email = data.email;
                    $cookies.username = data.username;
                    $cookies.profile = data.profile;
                    $cookies.user_type = data.user_type;
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
        $cookies = '';
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

})

.controller('UpdatePasswordController', function($scope, $location, $cookies, UserService) {

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.formData = [];
        $scope.formData.email = $cookies.email;
    };

    $scope.logout = function() {
        $cookies = '';
        $location.path('/log_in');
    }

    $scope.update = function() {
        var reqData = {
            email: $scope.formData.email,
            current_password: $scope.formData.current_password,
            new_password: $scope.formData.new_password,
            confirm_password: $scope.formData.confirm_password
        };

        UserService.update_password(reqData).then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.alerts = [
                    { type: 'success', msg: data.message }
                ];
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

})

.controller('ProfileController', function($scope, $location, $cookies, $modal, UserService) {

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.get_profile();
    };

    $scope.logout = function() {
        $cookies = '';
        $location.path('/log_in');
    };

    $scope.get_profile = function() {
        var UserData = {};

        UserService.get_profile(UserData).then(function(response) {
            var data = response.data;
            console.log('Get user profile: ' + data.message);
            if (data.status_code == 200) {
                $scope.formData = data.user;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    $scope.update = function() {
        var reqData = {
            fname: $scope.formData.fname,
            lname: $scope.formData.lname,
            address: $scope.formData.address,
            city: $scope.formData.city,
            state: $scope.formData.state,
            country: $scope.formData.country,
            zipcode: $scope.formData.zipcode,
            // profile: $scope.formData.profile,
            subscribe: 1
        };

        UserService.update_profile(reqData).then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.alerts = [{ type: 'success', msg: data.message }];
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.admin_update = function() {
        var reqData = $scope.formData;

        UserService.update_organizer_profile(reqData).then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.alerts = [{ type: 'success', msg: data.message }];
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            $scope.alerts = [{ type: 'danger', msg: error }];
        });
    };

    $scope.browse = function() {
        var dimensions = { width: 500, height: 500 };
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'view/partials/browsePopup.html',
            controller: 'LoadImageController',
            size: 'lg',
            resolve: {
                dimensions: function() {
                    return dimensions;
                }
            }
        });

        modalInstance.result.then(function(crop_image) {
            $scope.formData.crop_image = crop_image;
        }, function() {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.init();

})

.controller('PaymentsController', function($scope, $location, $cookies, $modal, UserService) {

    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.get_payments();
    };

    $scope.logout = function() {
        $cookies = '';
        $location.path('/log_in');
    };

    $scope.get_payments = function() {
        var UserData = {};

        UserService.get_payments(UserData).then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.formData = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    $scope.update = function() {
        var reqData = {
            card_number: $scope.formData.card_number,
            Card_date: $scope.formData.card_date,
            card_cvv: $scope.formData.card_cvv,
            billing_address: $scope.formData.billing_address,
            billing_city: $scope.formData.billing_city,
            billing_state: $scope.formData.billing_state,
            Billing_country: $scope.formData.billing_country,
            Billing_zipcode: $scope.formData.billing_zipcode,
            shipping_address: $scope.formData.shipping_address,
            shipping_city: $scope.formData.shipping_city,
            shipping_state: $scope.formData.shipping_state,
            shipping_country: $scope.formData.shipping_country,
            shipping_zipcode: $scope.formData.shipping_zipcode
        };

        UserService.update_payments(reqData).then(function(response) {
            var data = response.data;
            if (data.status_code == 200) {
                $scope.alerts = [{ type: 'success', msg: data.message }];
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