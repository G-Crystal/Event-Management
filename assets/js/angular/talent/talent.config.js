angular.module('app.talent', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/add_talents', {
        templateUrl: 'view/partials/talent/add_talent.html',
        controller: 'TalentController'
      })
      .when('/talent_profile', {
        templateUrl: 'view/partials/talent/talent_profile.html',
        controller: 'TalentController'
      });
  }])