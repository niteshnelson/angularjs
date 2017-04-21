(function () {
    var techMeterApp = angular.module('techMeterApp', ['ngRoute', 'myProfile', 'techmeterhome','dashboard','talent','mentor','training'])
    techMeterApp.config(config);

    function config($locationProvider, $routeProvider) {
        $routeProvider
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'js/app/home/home-view.html'
        })
        .when('/profile', {
            controller: 'MyProfileController',
            templateUrl: 'js/app/myprofile/profile-view.html'
        })
        .when('/mentor', {
            controller: 'MentorController',
            templateUrl: 'js/app/mentor/mentor-view.html'
        })

        .when('/talent', {
            controller: 'TalentController',
            templateUrl: 'js/app/talent/talent-view.html'
        })
        .when('/dashboard', {
            controller: 'DashboardController',
            templateUrl: 'js/app/dashboard/dashboard-view.html'
        })
        .when('/training', {
            controller: 'TrainingController',
            templateUrl: 'js/app/training/training-view.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
})();