angular.module('app.report')
  .controller('ReportController', function ($scope, $location, $cookies, ReportService) {

    var myStore = new store();
    
    $scope.init = function() {
      if(typeof($cookies.token) == 'undefined' || $cookies.token == '') {
        $scope.logout();
        return false;
      }

      $scope.events = myStore.events;
      $scope.cart_tickets = myStore.cart_tickets;
      $scope.order_report = myStore.order_report;
    };

    $scope.logout = function() {
      $cookies.token = '';
      $location.path('/log_in');
    }

    $scope.event_details = function () {
      var eventData = {
        id: $scope.event_id
      };
    };
    
    $scope.changeEvent = function(selectedEvent) {
      $scope.selectedEvent = selectedEvent;
    }
    
    $scope.selectedEvent = 'All Events';

    $scope.init();

});
