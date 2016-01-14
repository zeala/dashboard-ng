"use strict";

angular.module('app').directive('stockSetting',
    ['dataService',
        function (dataService) {
            return {
                templateUrl: 'client/widgets/localStock/stockSettingOptionsTemplate.html',
                scope: true,
                controller: "stockSettingsOptionController",
                controllerAs: "settingController",
                required: '^localStock',
                link: function (scope, el, attrs, ctrl) {

                    console.log("\n *** stock settings option directive tracing controller ");
                    console.log(ctrl);
                    console.log(scope);
                    dataService.getStock(scope.item.widgetSettings.id)
                        .then(function (data) {
                            scope.selectedStock = data;
                            scope.label = attrs.label;
                            scope.optionsPrompt = attrs.optionsPrompt;
                            scope.modelName = attrs.modelName;
                            scope.optionsName = attrs.optionsName;
                            scope.modelId = attrs.modelId;

                        });
                }
            };
        }]);