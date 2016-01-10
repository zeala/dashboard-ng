'use strict';

angular.module("psMenuModule").directive('psMenu', function(){
    return {
        scope:{

        },
        restrict: 'AE',
        transclude: true,
        templateUrl: "client/lib/psMenu/psMenuTemplate.html",
        controller: 'psMenuController',
        link: function(scope, el, attr){

        }
    }
});