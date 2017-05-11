angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        
        $routeProvider
            .when('/', {
                templateUrl: './views/home.html',
                controller: 'homeController'
            })
            .when('/profile', {
                templateUrl: './views/profile.html',
                controller: 'profileController'
            })
            .when('/contact', {
                templateUrl: './views/contact.html',
                controller: 'contactController'
            })
            .otherwise({
                redirectTo: "/"
            });
    })