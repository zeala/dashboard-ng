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
                template: '<div>dashboard</div>'
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
/*angular.module('app').config(function($urlRouterProvider, $stateProvider, $locationProvider){

    $stateProvider
        .state('test', {
            url:"/",
            template: '<div>test</div>'
        })
        .state('login', {
            url:'/login',
            template: '<div>blha blah</div>'
        });
    $urlRouterProvider.otherwise("/")
});*/

console.log(" initialised app");