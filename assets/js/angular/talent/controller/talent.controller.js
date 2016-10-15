angular.module('app.talent')
  .controller('TalentController', function ($scope, TalentService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.events = myStore.events;
    };

    $scope.add_talent = function () {debugger;
      var talentData = {
        talent_name: $scope.talent_name,
        talent_description: $scope.talent_biography,
        talent_header_image: $scope.header_img,
        talent_website: $scope.website_url,
        talent_twitter_url: $scope.twitter_url,
        talent_facebook_url: $scope.facebook_url
      };

      TalentService.add_talent(talentData).then(function (response) {
        console.log(response.data);
        console.log(response.data.message);debugger;
        if(response.data.status_code == 200)
        {

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
        console.log(response.data);
        console.log(response.data.message);
        if(response.data.status_code == 200)
        {

        } else {
          
        }
      }).catch(function(error) {
        console.log(error);
      });
    };

    $scope.init();
    $scope.search_talent();

  });
