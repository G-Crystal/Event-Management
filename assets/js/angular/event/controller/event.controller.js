angular.module('app.event')

// Controller for Event Detail page
.controller('EventDetailController', function($rootScope, $scope, $http, $location, $cookies, EventService) {

    // Initialize
    $scope.init = function() {
        if (typeof($cookies.token) == 'undefined' || $cookies.token == '') {
            $scope.logout();
            return false;
        }

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

    // Event handler for Link of Venue Deail
    $scope.venue_profile = function(venue_id = '') {
        $rootScope.venue_id = venue_id;
        $location.path('/venue_profile');
    }

    // Event handler for Link of Talent Deail
    $scope.talent_profile = function(talent_id = '') {
        $rootScope.talent_id = talent_id;
        $location.path('/talent_profile');
    }

    // Event handler for Load Buy Ticket
    $scope.loadBuyTicket = function(event_id = 0) {
        $rootScope.event_id = event_id;
        $location.path('/buy_ticket');
    }

    // Initialize
    $scope.init();

})

// Controller for Search Event page
.controller('SearchEventController', function($rootScope, $scope, $http, $location, $cookies, $debounce, EventService) {

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

    // Buy Ticket event handler
    $scope.loadBuyTicket = function(event_id = 0) {
        $rootScope.event_id = event_id;
        $location.path('/buy_ticket');
    }

    // Event handler for Link of Venue Deail
    $scope.venue_profile = function(venue_id = '') {
        $rootScope.venue_id = venue_id;
        $location.path('/venue_profile');
    }

    // change Category event handler
    $scope.changeCategory = function(selectedCategory) {
        $scope.selectedCategory = selectedCategory;
        $scope.search_event();
    };

    // Convert Datetime format function
    $scope.convertDate = function(datestr) {
        return new Date(datestr);
    }

    $scope.init();

})

// Controller for Upcoming Event page
.controller('UpcomingEventController', function($rootScope, $scope, $http, $location, $cookies, $modal, EventService) {

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
            console.log(data.message);
            if (data.status_code == 200) {
                $scope.events = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    $scope.editURL = function(index) {
        $scope.event = $scope.events[index - 1];

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'view/partials/event/editURLPopup.html',
            controller: 'EventController',
            size: 'lg'
        });
    };

    $scope.init();

})

// Controller for Past Event page
.controller('PastEventController', function($rootScope, $scope, $http, $location, $cookies, EventService) {

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
        $scope.load_past_event();
    }

    // Event handler for Search Event
    $scope.load_past_event = function() {
        var eventData = {
            page: $rootScope.page
        };

        EventService.past_event(eventData).then(function(response) {
            var data = response.data;
            console.log(data.message);
            if (data.status_code == 200) {
                $scope.events = data.data;
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

// Controller for Create Event page
.controller('CreateEventController', function($rootScope, $scope, $http, $location, $cookies, $modal, Upload, EventService, VenueService, TicketService) {

    var myStore = new store();
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
        // Call Ticket Detail function
        if ($rootScope.event_id && $rootScope.event_id != '') {
            var event_id = $rootScope.event_id;
            $rootScope.event_id = '';
        }
        $scope.get_ticket_by_event();
    }

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

    // Event handler for Search Event
    $scope.get_ticket_by_event = function() {
        var eventData = {
            event_id: $rootScope.event_id
        };

        TicketService.get_ticket_user(eventData).then(function(response) {
            var data = response.data;
            console.log(data.message);
            if (data.status_code == 200) {
                $scope.event_tickets = data.data;
            } else if (data.status_code == 101) {
                $scope.logout();
            } else {
                $scope.alerts = [{ type: 'danger', msg: (angular.isString(data.message) ? data.message : 'Input Error!') }];
            }
        }).catch(function(error) {
            console.log(error);
        });
    };

    // Event handler for Add Talent
    $scope.addTalent = function() {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'view/partials/talent/addTalentPopup.html',
            controller: 'AddTalentController',
            size: 'lg'
        });
    };

    // Event handler for Add Ticket
    $scope.addTicket = function() {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'view/partials/ticket/addTicketPopup.html',
            controller: 'TicketController',
            size: 'lg'
        });
    };

    // Event handler for Edit Ticket
    $scope.editTicket = function(ticket_id) {
        $rootScope.ticket_id = ticket_id;

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'view/partials/ticket/editTicketPopup.html',
            controller: 'EditTicketController',
            size: 'lg'
        });
    };

    // Event handler for Delete Ticket
    $scope.deleteTicket = function(ticket_id) {
        var eventData = {
            event_id: $rootScope.event_id
        };

        TicketService.delete_ticket(eventData).then(function(response) {
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

        $scope.get_ticket_by_event();
    };

    $scope.changeCategory = function(selectedCategory) {
        $scope.selectedCategory = selectedCategory;
    };

    $scope.init();
})

// Controller for Event page
.controller('EventController', function($rootScope, $scope, $http, $location, $cookies, $modal, Upload, EventService, VenueService, TicketService) {

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
        // Call Ticket Detail function
        if ($rootScope.event_id && $rootScope.event_id != '') {
            var event_id = $rootScope.event_id;
            $rootScope.event_id = '';
        }
    }

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

    // Event handler for Delete Event
    $scope.deleteEvent = function(ticket_id) {
        var eventData = {
            ids: $rootScope.event_ids
        };

        EventService.delete_event(eventData).then(function(response) {
            var data = response.data;
            console.log(data.message);
            if (data.status_code == 200) {
                $scope.event_tickets = data.data;
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