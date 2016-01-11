'use strict';

angular.module("psMenuModule").directive('psMenu', function(){
    return {
        scope:{

        },
        transclude: true,
        templateUrl: "client/lib/psMenu/psMenuTemplate.html",
        controller: 'psMenuController',
        link: function(scope, el, attr){

        }
    }
});