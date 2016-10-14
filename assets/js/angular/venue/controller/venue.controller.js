angular.module('app.venue')
  .controller('VenueController', function ($scope, VenueService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.events = myStore.events;
    };

    $scope.get_venue = function () {
      var venueData = {
      };

      VenueService.get_venue(venueData).then(function (data) {
        console.log(data);
        console.log(data.data.message);
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.init();
    $scope.get_venue();

});
