'use strict';

angular.module("app").directive("psFramework", function(){
   return {
       transclude: true,
       restrict: 'E',
       scope: {
           title: '@',
           description: '@',
           iconFile: '@'
       },
       controller: "psFrameworkController",
       templateUrl: "client/lib/psFramework/psFrameworkTemplate.html"
       //template: "<h1>This is the view from TEMPLATE</h1>"
   }
});

