angular.module('app.ticket')
  .controller('TicketController', function ($scope, $location, $cookies, TicketService) {

    var myStore = new store();
    
    $scope.init = function() {
      if(typeof($cookies.token) == 'undefined' || $cookies.token == '') {
        $scope.logout();
        return false;
      }
      
      $scope.ticket_types = myStore.ticket_type;
      $scope.delivery_types = myStore.delivery_type;
      $scope.events = myStore.events;
      $scope.ticket_type = 0;
      $scope.delivery_type = 0;
    };

    $scope.logout = function() {
      $location.path('/log_in');
    }

    $scope.add_ticket = function () {
      var ticketData = {
        ticket_name: $scope.ticket_name,
        quantity: $scope.quantity,
        ticket_description: $scope.description,
        delivery_type: $scope.delivery_type,
        ticket_type: $scope.ticket_type,
        ticket_cost: $scope.price
      };

      TicketService.add_ticket(ticketData).then(function (response) {
        var data = response.data;
        console.log(data);
        if( data.status_code == 200 ) {
          
        } else if( data.status_code == 101 ) {
          $scope.logout();
        } else {
          
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.edit_ticket = function () {
      var ticketData = {
        editTicketId: $scope.ticket_id,
        ticket_name: $scope.ticket_name,
        quantity: $scope.quantity,
        ticket_description: $scope.description,
        delivery_type: $scope.delivery_type,
        ticket_type: $scope.ticket_type,
        ticket_cost: $scope.price
      };

      TicketService.edit_ticket(ticketData).then(function (response) {
        var data = response.data;
        console.log(data);
        if( data.status_code == 200 ) {
          
        } else if( data.status_code == 101 ) {
          $scope.logout();
        } else {
          
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.init();

});
