"use strict";

angular.module('app').directive("localDashboard", [function(){
    return {
        scope:{

        },
        /*template: '<div>b;aj blah blah</div>'*/
        template: '<ps-dashboard></ps-dashboard>',
        link: function(scope){
            scope.widgets = [
                {
                    sizeX: 3,
                    sizey: 3,
                    row:0,
                    col:0
                },
                {
                    sizeX: 2,
                    sizeY: 4,
                    row:0,
                    col: 5
                }
            ]
        }
    }
}]);