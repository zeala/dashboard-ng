'use strict';

angular.module("app",
    ['psFrameworkModule',
        'angular-meteor',
        'ui.router',]);
angular.module('app').config(function($urlRouterProvider, $stateProvider, $locationProvider){

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
});

console.log(" initialised app");