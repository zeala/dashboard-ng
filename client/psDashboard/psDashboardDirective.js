"use strict";

angular.module('psDashboard').directive("psDashboard", [function(){
    return {

        templateUrl: 'client/psDashboard/psDashboardTemplate.html',
        link: function(scope, elemeent, attrs){
            scope.addNewWidget = function(widget){
                var newWidget = angular.copy(widget.settings);
                scope.widgets.push(newWidget);
            }
        }
    }
}]);