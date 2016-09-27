angular.module('app.event')
  .controller('EventController', function ($scope, $location, EventController) {

    $scope.event_details = function () {debugger;
      var eventData = {
        id: $scope.event_id
      };

      EventService.event_details(eventData).then(function (data) {debugger;
        console.log(data);
        if( data.status_code == 200 ) {
          console.log(data.token);
          $location.path('/');
        } else if( data.status_code == 2 ) {

        }
      }).catch(function(error) {
        console.log(error);
      });
    };

});
