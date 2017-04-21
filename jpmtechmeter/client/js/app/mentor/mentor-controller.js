(function () {
    var mentorController = angular.module('mentor');

    mentorController.controller('MentorController', MentorController);

    MentorController.$inject = ['$scope', '$http', 'ProfileFactory'];

    function MentorController($scope, $http, ProfileFactory) {
        //Properties
        $scope.jobRoles = ProfileFactory.jobRoles;
        $scope.skillAreaMap = ProfileFactory.skillAreaMap;
        $scope.proficiency = ProfileFactory.proficiency;
        $scope.skillList = ProfileFactory.skillList;
        $scope.myfilter = {mentorFlag:true};

        ProfileFactory.getJobRoles();
        ProfileFactory.getSkillList();

        //Methods
     
        //Method Implementations
     
    }
})();