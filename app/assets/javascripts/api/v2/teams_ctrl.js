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

    $scope.updateTeam = function(team, teamCreature, teamName, teamState, teamSport) {
      var teamData = {
        creature: teamCreature,
        name: teamName,
        state: teamState,
        sport: teamSport
      };
      $http.patch("/api/v2/teams/" + team.id + ".json", teamData).then(function(response){
        var index = $scope.people.indexOf(person);
        $scope.people[index] = response.data;
    });
    }
     $scope.deleteTeam = function(team, index) {
      $http.delete("/api/v2/teams/" + team.id + ".json").then(function(response){
        $scope.teams.splice(index, 1);
      });
    }


      $scope.toggleOrder = function(attribute) {
      if (attribute === $scope.orderAttribute) {
        $scope.descending = !$scope.descending
      } else {
        $scope.orderAttribute = attribute;
      }
    };
     


    window.$scope = $scope;

  });
})();