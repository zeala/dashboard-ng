"use strict";

angular.module('app').directive('localInventory',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'app/widgets/localInventory/localInventoryTemplate.html',
            link: function (scope, el, attrs) {
                dataService.getLocation(scope.item.widgetSettings.id)
                    .then(function (data) {
                        scope.selectedLocation = data;
                    });
            }
        };
    }]);