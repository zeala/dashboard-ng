"use strict";

angular.module('psDashboard').directive("psDashboard", [function(){
    return {

        templateUrl: 'client/psDashboard/psDashboardTemplate.html',
        link: function(scope, elemeent, attrs){
            scope.addNewWidget = function(widget){
                console.log("addNewWidget");
                console.log(widget);
                var newWidget = angular.copy(widget.settings);
                console.log(newWidget);
                console.log("settingss:")
                console.log(widget.settings);
                scope.widgets.push(newWidget);
            }
        }
    }
}]);