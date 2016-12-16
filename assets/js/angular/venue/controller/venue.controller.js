angular.module('app.venue')
    .controller('VenueController', function($rootScope, $scope, $location, $cookies, VenueService) {

        var myStore = new store();

        // Initialize
        $scope.init = function() {
            if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
                $scope.logout();
                return false;
            }

            $scope.get_venue_detail();
            $scope.events = myStore.events;
        };

        // Log out
        $scope.logout = function() {
            $cookies = '';
            $location.path('/log_in');
        }

        // Get Venue Details
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

        // Event handler for Link of Event Deail
        $scope.event_details = function(event_id = '') {
            $rootScope.event_id = event_id;
            $location.path('/event_details');
        }

        // Event handler for Load Buy Ticket
        $scope.loadBuyTicket = function(event_id = 0) {
            $rootScope.event_id = event_id;
            $location.path('/buy_ticket');
        }

        $scope.init();

    });