(function() {
  "use strict";

  angular.module("app").controller("teamsCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v2/teams.json").then(function(response) {
        $scope.teams = response.data;
      });
    }    

    $scope.addTeam = function(creature, name, state, sport) {
      var team = {
        creature: creature,
        name: name,
        state: state,
        sport: sport
      };
      $http.post("/api/v2/teams.json", team).then(function(response) {
        $scope.teams.push(response.data);
      });
    }

    $scope.deletePerson = function(index) {
      //$http.delete(......)
      $scope.people.splice(index, 1);
    }


    window.$scope = $scope;

  });
})();