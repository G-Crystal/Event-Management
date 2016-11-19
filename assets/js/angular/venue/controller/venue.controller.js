angular.module('app.venue')
    .controller('VenueController', function($rootScope, $scope, $location, $cookies, VenueService) {

        var myStore = new store();

        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }

            $scope.get_venue_detail();
            $scope.events = myStore.events;
        };

        $scope.logout = function() {
            $cookies.token = '';
            $location.path('/log_in');
        }

        $scope.get_venue_detail = function() {
            $scope.venue_id = ($rootScope.venue_id && $rootScope.venue_id != '') ? $rootScope.venue_id : '';
            $rootScope.venue_id = '';

            var venueData = {
                id: $scope.venue_id
            };

            VenueService.get_venue_detail(venueData).then(function(response) {
                var data = response.data;
                console.log(data.message);
                if (data.status_code == 200) {

                } else if (data.status_code == 101) {
                    $scope.logout();
                } else {

                }
            }).catch(function(error) {
                console.log(error);
            });
        };

        $scope.init();

    });