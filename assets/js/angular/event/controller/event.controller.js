angular.module('app.event')
  .controller('EventController', function ($scope, $location, EventService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.events = myStore.events;
    };

    $scope.event_details = function () {
      var eventData = {
        id: $scope.event_id
      };

      EventService.event_details(eventData).then(function (data) {
        console.log(data);
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
        if( data.status_code == 200 ) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.init();
    $scope.event_category();

});
