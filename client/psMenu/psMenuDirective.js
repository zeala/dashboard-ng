'use strict';

angular.module("psMenuModule").directive('psMenu',['$timeout', function($timeout){
    return {
        scope:{

        },
        transclude: true,
        templateUrl: "client/psMenu/psMenuTemplate.html",
        controller: 'psMenuController',
        link: function(scope, el, attr){
            var item = el.find('.ps-selectable-item:first');
            $timeout(function(){
                console.log("item should trigger click")
                console.log(item);
                item.trigger('click')
            }, 100);
        }
    }
}]);