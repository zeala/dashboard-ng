"use strict";

angular.module('app').directive("localDashboard", [function(){
    return {
        scope:{

        },
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

            scope.widgetDefinitions = [
                {
                    title: "Temperature",
                    settings:{
                        sizeX: 3,
                        sizeY: 3,
                        minSizeX: 2,
                        minSizeY:2,
                        template: '<local-temperature></local-temperature>',
                        widgetSettings:{
                            id: 1000,
                        }
                    }
                },
                {
                    title: "Stock",
                    settings:{
                        sizeX: 5,
                        sizeY: 3,
                        template: '<local-stock></local-stock>',
                        widgetSettings:{
                            id: 5001,
                        }
                    }
                },
                {
                    title: "Inventory",
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        row:3,
                        col: 5,
                        template: '<local-inventory></local-inventory>',
                        widgetSettings:{
                            id: 1002,
                        }
                    }
                }
            ]
            scope.widgets = [
                {
                    title:"First",
                    sizeX: 7,
                    sizeY: 4,
                    row:0,
                    col:0,
                    minSizeX: 4,
                    minSizeY:3,
                    template: '<local-stock></local-stock>',
                    widgetSettings:{
                        id: 1000,
                        templateUrl: 'client/dialogs/selectStockTemplate.html',
                        controller: 'selectStockController'
                    }
                },
                /*{
                    title: "Second",
                    sizeX: 5,
                    sizeY: 3,
                    row:0,
                    col: 5,
                    template: '<local-stock></local-stock>',
                    widgetSettings:{
                        id: 5001,
                        templateUrl: 'client/dialogs/selectStockTemplate.html',
                        controller: 'selectEmployeeController'
                    }
                },
                {
                    title: "Third",
                    sizeX: 5,
                    sizeY: 3,
                    row:3,
                    col: 5,
                    template: '<local-inventory></local-inventory>',
                    widgetSettings:{
                        id: 1002,
                        templateUrl: 'client/dialogs/selectLocationTemplate.html',
                        controller: 'selectLocationController'
                    }
                }*/
            ]
        }
    }
}]);