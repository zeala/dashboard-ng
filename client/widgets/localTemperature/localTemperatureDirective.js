'use strict';

angular.module('app').directive('localTemperature', ['dataService',
    function(dataService){
        return {
            templateUrl: 'client/widgets/localTemperature/localTemperatureTemplate.html',
            link: function(scope, el, attrs){
                dataService.getLocation(scope.item.widgetSettings.id)
                    .then(function(data){
                        scope.selectedLocation = data;
                    });
            }
        }
    }]);