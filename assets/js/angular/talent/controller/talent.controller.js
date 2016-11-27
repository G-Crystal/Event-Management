angular.module('app.talent')
    .controller('AddTalentController', function($scope, $cookies, TalentService) {

        var myStore = new store();

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

        $scope.add_talent = function() {
            var talentData = {
                talent_name: $scope.talent_name,
                talent_description: $scope.talent_biography,
                talent_header_image: $scope.header_img,
                talent_website: $scope.website_url,
                talent_twitter_url: $scope.twitter_url,
                talent_facebook_url: $scope.facebook_url
            };

            TalentService.add_talent(talentData).then(function(response) {
                var data = response.data;
                console.log(data.message);
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

        $scope.search_talent = function() {
            var talentData = {
                talent: '' //$scope.talent_name
            };

            TalentService.search_talent(talentData).then(function(response) {
                var data = response.data;
                console.log(data.message);
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
    })

    .controller('TalentProfileController', function($rootScope, $scope, $cookies, TalentService) {

        var myStore = new store();

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }

            $scope.events = myStore.events;
            $scope.talent_profile();
        };

        $scope.logout = function() {
            $cookies.token = '';
            $location.path('/log_in');
        }

        $scope.talent_profile = function() {
            $scope.talent_id = ($rootScope.talent_id && $rootScope.talent_id != '') ? $rootScope.talent_id : '';
            $rootScope.venue_id = '';

            var talentData = {
                id: $scope.talent_id
            };

            TalentService.get_talent_detail(talentData).then(function(response) {
                var data = response.data;
                console.log(data.message);
                if (data.status_code == 200) {
                    $scope.datas = data.data;
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