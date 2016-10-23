angular.module('app.event')

// Controller for Event Detail page
.controller('EventDetailController', function($rootScope, $scope, $http, $location, $cookies, $modal, $log, Upload, EventService) {

    var selectedCategory;

    // Initialize
    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.selectedCategory = 'Select category';

        $scope.load_datas();
    };

    // Log out
    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    }

    // Load Initial Datas
    $scope.load_datas = function(eventData) {
        // Call Event Detail function
        $scope.event_id = ($rootScope.event_id && $rootScope.event_id != '') ? $rootScope.event_id : '';
        $rootScope.event_id = '';

        $scope.load_event_detail();
    }

    // Convert Date format from Date string
    $scope.convertDate = function(datestr) {
        return new Date(datestr);
    }

    // Load Event Detail
    $scope.load_event_detail = function() {
        var eventData = $scope.event_id;

        EventService.event_details(eventData).then(function(response) {
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
    }

    // Event handler for Link of Event Detail
    $scope.event_details = function(event_id = '') {
        $rootScope.event_id = event_id;
        $location.path('/event_details');
    }

    // Event handler for Link of Venue Deail
    $scope.venue_profile = function(venue_id = '') {
        $rootScope.venue_id = venue_id;
        $location.path('/venue_profile');
    }

    // Event handler for Link of Talent Deail
    $scope.talent_profile = function(venue_id = '') {
        $rootScope.talent_id = talent_id;
        $location.path('/talent_profile');
    }

    // Event handler for Change Event Category
    $scope.changeCategory = function(selectedCategory) {
        $scope.selectedCategory = selectedCategory;
        $scope.search_event();
    };

    // Initialize
    $scope.init();

})

// Controller for Search Event page
.controller('SearchEventController', function($rootScope, $scope, $http, $location, $cookies, $debounce, $modal, $log, Upload, EventService) {

    var selectedCategory;

    // Initialize
    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.selectedCategory = 'Select category';

        $scope.load_datas();
    };

    // Log out
    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    }

    // Load Initial Datas
    $scope.load_datas = function(eventData) {
        // Load Search Event Result function
        $scope.load_search_event();
    }

    // Event handler for Search Event
    $scope.load_search_event = function() {
        var eventData = {
            search: $rootScope.search,
            event_category: $rootScope.event_category,
            location: $rootScope.location
        };

        EventService.search_event(eventData).then(function(response) {
            var data = response.data;
            console.log(data.message);
            if (data.status_code == 200) {
                $scope.search_events = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    // Event handler for Link of Event Detail
    $scope.search_event = function() {
        $debounce(call_search_event, 300);
    }

    // Debounce event handler
    var call_search_event = function() {
        $rootScope.search = $scope.search_name;
        $rootScope.event_category = (($scope.selectedCategory == 'Select category') ? '' : $scope.selectedCategory);
        $rootScope.location = $scope.location;

        $scope.load_search_event();
    }

    $scope.changeCategory = function(selectedCategory) {
        $scope.selectedCategory = selectedCategory;
        $scope.search_event();
    };

    $scope.convertDate = function(datestr) {
        return new Date(datestr);
    }

    $scope.init();

})

// Controller for Upcoming Event page
.controller('UpcomingEventController', function($rootScope, $scope, $http, $location, $cookies, $debounce, $modal, $log, Upload, EventService) {

    var selectedCategory;

    // Initialize
    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $rootScope.page = (typeof($rootScope.page) == 'undefined') ? 1 : $rootScope.page;

        $scope.load_datas();
    };

    // Log out
    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    }

    // Load Initial Datas
    $scope.load_datas = function(eventData) {
        // Load Search Event Result function
        $scope.load_upcoming_event();
    }

    // Event handler for Search Event
    $scope.load_upcoming_event = function() {
        var eventData = {
            page: $rootScope.page
        };

        EventService.upcoming_event(eventData).then(function(response) {
            var data = response.data;
            debugger;
            console.log(data.message);
            if (data.status_code == 200) {
                $scope.search_events = data.data;
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

// Controller for Event page
.controller('EventController', function($rootScope, $scope, $http, $location, $cookies, $modal, $log, Upload, EventService, VenueService) {

    var myStore = new store();
    var selectedCategory;

    // Initialize
    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

        $scope.events = myStore.events;
        $scope.pastevent = myStore.pastevent;
        $scope.upcomingevent = myStore.upcomingevent;
        $scope.searchpage = myStore.searchpage;
        $scope.selectedCategory = 'Select category';

        // $scope.featured_event();
        $scope.load_datas();
    };

    // Log out
    $scope.logout = function() {
        $cookies.token = '';
        $location.path('/log_in');
    }

    // Load Initial Datas
    $scope.load_datas = function(eventData) {
        // Call Event Detail function
        if ($rootScope.event_id && $rootScope.event_id != '') {
            var event_id = $rootScope.event_id;
            $rootScope.event_id = '';
        }
    }

    /*$scope.event_category = function () {
      var eventData = {
      };

      EventService.event_category(eventData).then(function (response) {
        var data = response.data;
        console.log(data);
        console.log(data.message);
        if( data.status_code == 200 ) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };*/

    // Event handler for Create Event
    $scope.publish = function() {
        var eventData = {
            token: $cookies.token,
            organization_name: '',
            event_name: $scope.event_name,
            event_category: ($scope.selectedCategory == 'Select category') ? '' : $scope.selectedCategory,
            event_image: $scope.event_image,
            header_image: $scope.header_image,
            description: $scope.description,
            start_date: $scope.start_date,
            end_date: $scope.end_date,
            doors_date: $scope.doors_date,
            talent_id: $scope.talent_id,
            venue_id: $scope.search_venue,
            venue_capacity: $scope.venue_capacity,
            ticket_text: $scope.additional_text,
            age: $scope.age_limit,
            facebook_url: $scope.facebook_url,
            twitter_url: $scope.twitter_url,
            instagram_url: $scope.instagram_url
        };

        EventService.publish(eventData).then(function(response) {
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

    // Event handler for Save Event as Draft
    $scope.draft = function() {};

    // Event handler for Search Event
    $scope.search_event = function() {
        var eventData = {
            search: $scope.search_name,
            event_category: (($scope.selectedCategory == 'Select category') ? '' : $scope.selectedCategory),
            location: $scope.location
        };

        EventService.search_event(eventData).then(function(response) {
            var data = response.data;
            console.log(data.message);
            if (data.status_code == 200) {
                $scope.search_events = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    // Load Search Event
    $scope.featured_event = function() {
        EventService.featured_event().then(function(response) {
            var data = response.data;
            console.log(data.message);
            if (data.status_code == 200) {
                $scope.search_events = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    // Load Get Venue
    $scope.get_venues = function(val) {
        return $http.get('http://staging.ticketvow.com/api/getVenue', {
            params: {
                venue: val
            }
        }).then(function(response) {
            var data = response.data;
            return data.data.map(function(item) {
                return item.value;
            });
        });
        /*var venueData = {
          venue: val
        };

        VenueService.get_venue(val).then(function (response) {
          var data = response.data;
          if( data.status_code == 200 ) {
            return data.data.map(function(item){
              return item.value;
            });
          } else {
            console.log(data.message);
          }
        }).catch(function(error) {
          console.log(error);
        });*/
    };

    $scope.get_talents = function(val) {
        return $http.post('http://staging.ticketvow.com/api/getSearchTalents', {
            params: {
                talent: val
            }
        }).then(function(response) {
            var data = response.data;
            return data.data.map(function(item) {
                return item.value;
            });
        });
    };

    $scope.addTicket = function() {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'view/partials/ticket/addTicketPopup.html',
            controller: 'TicketController',
            size: 'lg'
        });
    };

    $scope.addTalent = function() {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'view/partials/talent/addTalentPopup.html',
            controller: 'TalentController',
            size: 'lg'
        });
    };

    $scope.editURL = function(type, index) {
        $scope.event = (type == 1) ? $scope.pastevent[index - 1] : $scope.upcomingevent[index - 1];

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'view/partials/event/editURLPopup.html',
            controller: 'EventController',
            size: 'lg'
        });
    };

    $scope.changeCategory = function(selectedCategory) {
        $scope.selectedCategory = selectedCategory;
        $scope.search_event();
    };

    $scope.init();

});