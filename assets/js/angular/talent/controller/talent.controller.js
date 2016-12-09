angular.module('app.talent')
    .controller('AddTalentController', function($scope, $cookies, TalentService) {

        var myStore = new store();

        $scope.editorConfig = {
            btns: [
                ['viewHTML'],
                ['undo', 'redo'],
                ['formatting'],
                'btnGrp-design', ['link'],
                ['image'],
                'btnGrp-justify',
                'btnGrp-lists', ['foreColor', 'backColor'],
                ['preformatted'],
                ['horizontalRule']
            ]
        };

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

.controller('TalentProfileController', function($rootScope, $scope, $location, $cookies, TalentService) {

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

        TalentService.talent_profile(talentData).then(function(response) {
            var data = response;
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

    // Buy Ticket event handler
    $scope.loadBuyTicket = function(event_id = 0) {
        $rootScope.event_id = event_id;
        $location.path('/buy_ticket');
    }

    // Event handler for Link of Event Detail
    $scope.event_details = function(event_id = '') {
        $rootScope.event_id = event_id;
        $location.path('/event_details');
    }

    $scope.init();
});