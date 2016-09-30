angular.module('app.organizer')
  .controller('OrganizerController', function ($scope, OrganizerService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.events = myStore.events;
    };

    $scope.signup = function () {
      var organizerData = {
        fname: $scope.first_name,
        lname: $scope.last_name,
        email: $scope.email, 
        password: $scope.password,
        repassword: $scope.cfm_password,
        profile: $scope.profile,
        address: $scope.per_address,
        city: $scope.per_city,
        state: $scope.per_state,
        country: $scope.per_country,
        zipcode: $scope.per_zipcode,
        number: $scope.per_phone_number,
        organization_name: $scope.ent_name,
        organization_address: $scope.ent_address,
        organization_city: $scope.ent_city,
        organization_state: $scope.ent_state,
        organization_country: $scope.ent_country,
        organization_zipcode: $scope.ent_zipcode,
        organization_number: $scope.ent_phone_number
      };

      OrganizerService.signup(organizerData).then(function (data) {
        console.log(data);
        alert('Organizer sign up: ' + data.status);
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.get_profile = function () {
      var organizerData = {
        token: ''//$scope.token
      };

      OrganizerService.get_profile(organizerData).then(function (data) {
        console.log(data.data);
        alert('Get organizer profile: ' + data.data.message);
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.init();
    $scope.get_profile();

});
