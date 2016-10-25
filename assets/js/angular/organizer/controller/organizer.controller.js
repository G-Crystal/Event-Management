angular.module('app.organizer')
    .controller('OrganizerController', function($scope, $location, $cookies, OrganizerService) {

        var myStore = new store();

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }

            $scope.get_public_profile();
            $scope.events = myStore.events;
        };

        $scope.logout = function() {
            $cookies.token = '';
            $location.path('/log_in');
        }

        $scope.signup = function() {
            var organizerData = {
                fname: $scope.first_name,
                lname: $scope.last_name,
                email: $scope.email,
                password: $scope.password,
                repassword: $scope.cfm_password,
                profile: $scope.profile,
                address: $scope.per_address,
                city: $scope.per_city,
                state: $scope.per_state,
                country: $scope.per_country,
                zipcode: $scope.per_zipcode,
                number: $scope.per_phone_number,
                organization_name: $scope.ent_name,
                organization_address: $scope.ent_address,
                organization_city: $scope.ent_city,
                organization_state: $scope.ent_state,
                organization_country: $scope.ent_country,
                organization_zipcode: $scope.ent_zipcode,
                organization_number: $scope.ent_phone_number
            };

            OrganizerService.signup(organizerData).then(function(response) {
                var data = response.data;
                console.log('Organizer sign up: ' + data.message);
                if (data.status_code == 200) {

                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {
                    $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
                }
            }).catch(function(error) {
                console.log(error);
            });
        };

        $scope.get_profile = function(organizer_id = 14) {
            var organizerData = {
                id: organizer_id
            };

            OrganizerService.get_profile(organizerData).then(function(response) {
                var data = response.data;
                console.log('Get organizer profile: ' + data.message);
                if (data.status_code == 200) {

                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {
                    $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
                }
            }).catch(function(error) {
                console.log(error);
            });
        };

        $scope.get_public_profile = function(organizer_id = 14) {
            var organizerData = {
                id: organizer_id
            };

            OrganizerService.get_public_profile(organizerData).then(function(response) {
                debugger;
                var data = response.data;
                console.log('Get organizer public profile: ' + data.message);
                if (data.status_code == 200) {

                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {
                    $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
                }
            }).catch(function(error) {
                console.log(error);
            });
        };

        $scope.init();

    });