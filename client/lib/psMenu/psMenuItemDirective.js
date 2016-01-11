'use strict';

angular.module('psMenuModule').directive('psMenuItem', function(){
    return{
        require: '^psMenu',
        scope:{
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'client/lib/psMenu/psMenuItemTemplate.html',
        link: function(scope, el, attr, ctrl){
            scope.isActive = function(){
                return el === ctrl.getActiveElement();
            };

            scope.isVertical = function(){
                return ctrl.isVertical();
            }
            el.on('click', function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function(){
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            })
        }
    }
});