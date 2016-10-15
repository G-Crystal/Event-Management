angular.module('app.talent')
  .controller('TalentController', function ($scope, $cookies, TalentService) {

    var myStore = new store();
    
    $scope.init = function() {
      if(typeof($cookies.token) == 'undefined' || $cookies.token == '') {
        $scope.logout();
        return false;
      }

      $scope.events = myStore.events;
    };

    $scope.logout = function() {
      $cookies.token = '';
      $location.path('/log_in');
    }

    $scope.add_talent = function () {
      var talentData = {
        talent_name: $scope.talent_name,
        talent_description: $scope.talent_biography,
        talent_header_image: $scope.header_img,
        talent_website: $scope.website_url,
        talent_twitter_url: $scope.twitter_url,
        talent_facebook_url: $scope.facebook_url
      };

      TalentService.add_talent(talentData).then(function (response) {
        var data = response.data;
        console.log(data.message);
        if(data.status_code == 200)
        {

        } else if( data.status_code == 101 ) {
          $scope.logout();
        } else {
          
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.search_talent = function () {
      var talentData = {
        talent: ''//$scope.talent_name
      };

      TalentService.search_talent(talentData).then(function (response) {
        var data = response.data;
        console.log(data.message);
        if(data.status_code == 200)
        {

        } else if( data.status_code == 101 ) {
          $scope.logout();
        } else {
          
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.init();
    // $scope.search_talent();

  });
