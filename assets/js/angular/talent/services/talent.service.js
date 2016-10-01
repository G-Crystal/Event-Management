angular.module('app.talent')
  .factory('TalentService', function($http) {

    var Talent = {

      talent_profile: function(data) {
        return $http.get('http://ticketvow.com/api/getTalentProfile', data).then(function (res) {
          Talent = res.data;
        })
      },

      add_talent: function(data) {
        return $http.post('http://ticketvow.com/api/addTalent', data);
      },

      search_talent: function(data) {
        return $http.post('http://ticketvow.com/api/getSearchTalents', data);
      },

    };

    return Talent;
  });