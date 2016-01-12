"use strict";

angular.module('app').directive("localDashboard", [function(){
    return {
        scope:{

        },
        /*template: '<div>b;aj blah blah</div>'*/
        template: '<ps-dashboard></ps-dashboard>',
        link: function(scope){

            scope.title= "Dashboard",
            scope.gridsterOpts={
                columns:12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                flating: true,
                swapping:false
            };
            scope.widgets = [



                {
                    title:"First",
                    sizeX: 3,
                    sizeY: 3,
                    row:0,
                    col:0
                },
                {
                    title: "Second",
                    sizeX: 2,
                    sizeY: 4,
                    row:0,
                    col: 5
                }
            ]
        }
    }
}]);