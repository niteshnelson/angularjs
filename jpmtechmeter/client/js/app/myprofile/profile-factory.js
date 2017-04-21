(function() {
    var profileModule = angular.module('myProfile');
    profileModule.factory('ProfileFactory', ProfileFactory);

    function ProfileFactory($http) {
        var jobRoles = [];
        var skillAreaMap = {};
        skillAreaMap['Programming Languages'] = ['Java', 'C++', 'C#', 'AngularJS', 'HTML5', 'Spring', 'Spring Integration'];
        skillAreaMap['Databases'] = ['Oracle','Marklogic','Sybase','MySql','MongoDB','Cassandra'];
        skillAreaMap['Version Control'] = ['SVN','CVS','GIT','VSS'];
        skillAreaMap['Dev Tools'] = ['Eclipse','IntelliJ','Visual Studio','XmlSpy'];
        var proficiency = ['begginner', 'intermediate', 'proficient'];
        var skillList = [];
        return {
            jobRoles: jobRoles,
            getJobRoles: getJobRoles,
            skillAreaMap: skillAreaMap,
            proficiency: proficiency,
            skillList: skillList,
            getSkillList: getSkillList
        }

        function getJobRoles() {
            // makes a request against /jobRoles on the same server
            $http.get('/jobRoles').then(function (response) {
                jobRoles.length = 0;
                // response.data contains the parsed JSON from the server
                response.data.forEach(function (item) {
                    jobRoles.push(item);
                });
            }, function (err) { });
        }

        function getSkillList() {
            // makes a request against /getSkills on the same server
            $http.get('/getSkills').then(function (response) {
                skillList.length = 0;
                // response.data contains the parsed JSON from the server
                response.data.forEach(function (item) {
                    skillList.push(item);
                });
            }, function (err) { });
        }
        
    }
})();