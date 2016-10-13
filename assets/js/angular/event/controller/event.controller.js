angular.module('app.event')
  .controller('EventController', function ($scope, $http, $location, $cookies, $modal, $log, EventService, VenueService) {

    var myStore = new store();
    
    $scope.init = function() {
      if(typeof($cookies.token) == 'undefined' || $cookies.token == '') {
        $scope.logout();
        return false;
      }

      $scope.events = myStore.events;
      $scope.pastevent = myStore.pastevent;
      $scope.upcomingevent = myStore.upcomingevent;
      $scope.selectedCategory = 'Select category';

      $scope.featured_event();
    };

    $scope.logout = function() {
      $location.path('/log_in');
    }

    $scope.event_details = function () {
      var eventData = {
        id: ''//$scope.event_id
      };

      EventService.event_details(eventData).then(function (response) {
        var data = response.data;
        console.log(data);
        alert(data.message);
        if( data.status_code == 200 ) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };
        
    $scope.event_category = function () {
      var eventData = {
      };

      EventService.event_category(eventData).then(function (response) {
        var data = response.data;
        console.log(data);
        alert(data.message);
        if( data.status_code == 200 ) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.publish = function () {debugger;
      var eventData = {
        token: $cookies.token,
        organization_name: '',
        event_name: $scope.event_name,
        event_category: $scope.event_category,
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

      EventService.publish(eventData).then(function (response) {
        console.log(response.data);
        alert(data.message);
        if( data.status_code == 200 ) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.addTicket = function () {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'view/partials/ticket/addTicketPopup.html',
        controller: 'TicketController',
        size: 'lg'
      });
    };

    $scope.addTalent = function () {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'view/partials/talent/addTalentPopup.html',
        controller: 'TalentController',
        size: 'lg'
      });
    };

    $scope.editURL = function (type, index) {
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
    }

    $scope.search_event = function () {
      var eventData = {
        search: $scope.search_name,
        event_category: (($scope.selectedCategory == 'Select category') ? '' : $scope.selectedCategory),
        location: $scope.location
      };

      EventService.search_event(eventData).then(function (response) {
        var data = response.data;
        if( data.status_code == 200 ) {
          $scope.search_events = data.data;
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.featured_event = function () {
      EventService.featured_event().then(function (response) {
        var data = response.data;
        if( data.status_code == 200 ) {
          $scope.search_events = data.data;
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.get_venues = function (val) {
      return $http.get('http://staging.ticketvow.com/api/getVenue', {
        params: {
          venue: val
        }
      }).then(function(response){
        var data = response.data;
        return data.data.map(function(item){
          return item.value;
        });
      });
      /*var venueData = {
        venue: val
      };

      VenueService.get_venue(val).then(function (response) {
        var data = response.data;debugger;
        if( data.status_code == 200 ) {
          return data.data.map(function(item){debugger;
            return item.value;
          });
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });*/
    };

    $scope.init();

});
