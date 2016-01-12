'use strict';

angular.module("app",
    ['psFrameworkModule',
        'angular-meteor',
        'ui.router',
        'ngRoute']);

angular.module('app').config(['$routeProvider', function($routeProvider){
    var routes = [
        {
            url: '/dashboard',
            config:{
                template: '<local-dashboard></local-dashboard>'
            }
        },
        {
            url: '/locations',
            config: {
                template: '<div>locations</div>'
            }
        },

        {
            url: '/guides',
            config:{
                template: '<div>guides</div>'
            }
        }

    ];
    routes.forEach(function(route){
        $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({redirectTo: '/dashboard'});
}])

console.log(" initialised app");