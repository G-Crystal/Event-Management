angular.module('app.event')
  .controller('EventController', function ($scope, $location, ngDialog, EventService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.events = myStore.events;
      $scope.pastevent = myStore.pastevent;
    };

    $scope.event_details = function () {
      var eventData = {
        id: $scope.event_id
      };

      EventService.event_details(eventData).then(function (data) {
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

      EventService.event_category(eventData).then(function (data) {
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

    $scope.AddTicket = function () {
      var modalPromise = ngDialog.open({
        template: 'view/partials/ticket/addTicketPopup.html', 
        className: 'ngdialog-theme-default', 
        preserveFocus: false, 
        trapFocus: false,
        width: '768px'
      });
    };

    $scope.AddTalent = function () {
      var modalPromise = ngDialog.open({
        template: 'view/partials/talent/addTalentPopup.html', 
        className: 'ngdialog-theme-default', 
        preserveFocus: false, 
        trapFocus: false,
        width: '768px'
      });
    };

    $scope.init();
    // $scope.event_category();

});
