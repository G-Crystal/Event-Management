angular.module('app.event')
  .controller('EventController', function ($scope, $location, EventService) {

    var myStore = new store();
    
    $scope.init = function() {debugger;
      $scope.events = myStore.events;
    };

    $scope.event_details = function () {debugger;
      var eventData = {
        id: $scope.event_id
      };

      EventService.event_details(eventData).then(function (data) {debugger;
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
    $scope.event_details();

});
