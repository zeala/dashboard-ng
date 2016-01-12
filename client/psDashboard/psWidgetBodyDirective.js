'use strict';

angular.module('psDashboard').directive('psWidgetBody',[
    '$compile',
    function($compile){
        return{
            templateUrl: 'client/psDashboard/psWidgetBodyTemplate.html',
            link: function(scope, element, attrs){
                var newElement = angular.element(scope.item.template);

                console.log("--- before compiling : ");
                console.log(scope.item.template);
                console.log(scope.item);

                element.append(newElement);

                $compile(newElement)(scope);
            }
        }
    }]);