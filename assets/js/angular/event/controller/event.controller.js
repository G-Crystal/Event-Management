angular.module('app.event')
  .controller('EventController', function ($scope, $location, $cookies, ngDialog, EventService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.events = myStore.events;
      $scope.pastevent = myStore.pastevent;
      $scope.upcomingevent = myStore.upcomingevent;
    };

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

    $scope.publish = function () {
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
      var modalPromise = ngDialog.open({
        template: 'view/partials/ticket/addTicketPopup.html', 
        className: 'ngdialog-theme-default', 
        preserveFocus: false, 
        trapFocus: false,
        width: '768px'
      });
    };

    $scope.addTalent = function () {
      var modalPromise = ngDialog.open({
        template: 'view/partials/talent/addTalentPopup.html', 
        className: 'ngdialog-theme-default', 
        preserveFocus: false, 
        trapFocus: false,
        width: '768px'
      });
    };

    $scope.editURL = function (type, index) {
      $scope.event = (type == 1) ? $scope.pastevent[index - 1] : $scope.upcomingevent[index - 1];

      var modalPromise = ngDialog.open({
        template: 'view/partials/event/editURLPopup.html', 
        className: 'ngdialog-theme-default', 
        preserveFocus: false, 
        trapFocus: false,
        width: '768px',
        scope: $scope
      });
    };

    $scope.init();
    $scope.event_details();

});
