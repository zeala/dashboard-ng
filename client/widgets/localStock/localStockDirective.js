"use strict";

angular.module('app').directive('localStock',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'client/widgets/localStock/localStockTemplate.html',
            controller: "localStockController",
            controllerAs: "stockController",

            link: function (scope, el, attrs) {

                dataService.getStock(scope.item.widgetSettings.id)
                    .then(function (data) {

                        scope.selectedStock = data;
                    });
            }
        };
    }]);