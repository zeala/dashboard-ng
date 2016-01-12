"use strict";

angular.module('app').directive('localEmployee',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'client/widgets/localEmployee/localEmployeeTemplate.html',
            link: function (scope, el, attrs) {
                dataService.getEmployee(scope.item.widgetSettings.id)
                    .then(function (data) {
                        scope.selectedEmployee = data;
                    });
            }
        };
    }]);