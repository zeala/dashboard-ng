angular.module('app').controller("stockSettingsOptionController",
    [ "$scope", "dataService", function($scope, dataService) {

        $scope.label = "";
        $scope.optionsPrompt = "";
        $scope.modelName = "";
        $scope.optionsName = "";

        $scope.getOptions = function(){

            if (! $scope.isLoaded){
                return;
            }
            return $scope[$scope.optionsName];
        }
    }
    ])