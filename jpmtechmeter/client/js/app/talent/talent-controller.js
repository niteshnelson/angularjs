(function () {
    var talentController = angular.module('talent');

    talentController.controller('TalentController', TalentController);

    TalentController.$inject = ['$scope', '$http', 'ProfileFactory'];

    function TalentController($scope, $http, ProfileFactory) {
        //Properties
        $scope.jobRoles = ProfileFactory.jobRoles;
        $scope.skillAreaMap = ProfileFactory.skillAreaMap;
        $scope.proficiency = ProfileFactory.proficiency;
        $scope.skillList = ProfileFactory.skillList;

        ProfileFactory.getJobRoles();
        ProfileFactory.getSkillList();

        //Methods

        //Method Implementations

    }
})();