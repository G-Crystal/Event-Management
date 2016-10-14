angular.module('app.talent')
  .controller('TalentController', function ($scope, TalentService) {

    var myStore = new store();
    
    $scope.init = function() {
      $scope.events = myStore.events;
    };

    $scope.add_talent = function () {
      var talentData = {
        token: '',
        talent_name: '',
        talent_description: '',
        talent_header_image: '',
        talent_website: '',
        talent_twitter_url: '',
        talent_facebook_url: ''
      };

      TalentService.add_talent(talentData).then(function (response) {
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
