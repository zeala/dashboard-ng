angular.module('app').controller("stockSettingsOptionController",
    [ "$scope", "dataService", function($scope, dataService) {

        $scope.label = "";
        $scope.optionsPrompt = "";
        $scope.modelName = "";
        $scope.modelId = "";
        $scope.optionsName = "";

        $scope.getSelectedItem = function(){
            console.log("\n scope , model name");
            console.log($scope);
            console.log($scope.modelName)
        };

        $scope.getOptions = function(){

            if (! $scope.isLoaded){
                return;
            }
            return $scope[$scope.optionsName];
        };

        $scope.$watch("modelName", function(newVal, oldVal){
            console.log("scope.modelName changed");
            console.log($scope.modelName);
            console.log($scope);

            $scope.$parent.saveProperty($scope.modelId, newVal);
            console.log("parent scope :");
            console.log($scope.$parent);
            console.log(event);
        }, true)
    }
    ])