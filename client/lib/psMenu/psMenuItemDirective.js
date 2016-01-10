'use strict';

angular.module('psMenuModule').directive('psMenuItem', function(){
    return{
        required: '^psMenuModule',
        scope:{
            label: '@'
        },
        templateUrl: 'client/lib/psMenu/psMenuItemTemplate.html',
        link: function(scope, el, attr, ctrl){

        }
    }
});