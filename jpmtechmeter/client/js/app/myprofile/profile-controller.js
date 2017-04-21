(function () {
    var myProfileController = angular.module('myProfile');

    myProfileController.controller('MyProfileController', MyProfileController);
    MyProfileController.$inject = ['$scope','$http', 'ProfileFactory'];

    function MyProfileController($scope, $http, ProfileFactory) {
        //Properties
        $scope.jobRoles = ProfileFactory.jobRoles;
        $scope.skillAreaMap = ProfileFactory.skillAreaMap;
        $scope.proficiency = ProfileFactory.proficiency;
        $scope.skillList = ProfileFactory.skillList;

        ProfileFactory.getJobRoles();
        ProfileFactory.getSkillList();

        $scope.newSkill = {
            empName: '',
            area: '',
            name: '',
            proficiency: '',
            experience: 0,
            mentorFlag: false,
            hiringFlag: false
        };
  

        //Methods
        $scope.addSkill = addSkill;
        $scope.removeSkill = removeSkill;
        $scope.commitToServer = commitToServer;
        


        //Method Implementations
        function addSkill() {
            var objectToAddToList = angular.copy($scope.newSkill);
            $scope.skillList.push(objectToAddToList);

            //reset the form
           
            $scope.newSkill.area = '';
            $scope.newSkill.name = '';
            $scope.newSkill.experience = 0;
            $scope.newSkill.proficiency = '';
            $scope.newSkill.hiringFlag = false;
            $scope.newSkill.mentorFlag = false;
        }

        function removeSkill(skill) {
            var index = $scope.skillList.indexOf(skill);
            $scope.skillList.splice(index, 1);
        }

        function commitToServer() {
            console.log("Posting data");
            $http.post('/addSkills', $scope.skillList);
        }

       
    }
})();
