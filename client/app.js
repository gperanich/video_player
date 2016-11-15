angular.module('VideoPlayerApp', ['ngResource', 'ngRoute','VideoPlayer.controllers', 'VideoPlayer.factories'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/input.html',
            controller: 'InputController'
        })
        .when('/viewer', {
            templateUrl: 'views/viewer.html',
            controller: 'ViewerController'
        })
        .when('/viewer/:id', {
            templateUrl: 'views/update.html',
            controller: 'UpdateController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])