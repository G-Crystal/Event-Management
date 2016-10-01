angular.module('app.report')
  .controller('ReportController', function ($scope, ReportService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.events = myStore.events;
      $scope.cart_tickets = myStore.cart_tickets;
      $scope.order_report = myStore.order_report;
    };

    $scope.event_details = function () {
      var eventData = {
        id: $scope.event_id
      };
    };
    
    $scope.changeEvent = function(selectedItem) {
      $scope.selectedItem = selectedItem;
    }
    
    $scope.selectedItem = 'All Events';

    $scope.init();

});
