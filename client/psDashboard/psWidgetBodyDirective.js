'use strict';

angular.module('psDashboard').directive('psWidgetBody',[
    '$compile', '$modal',
    function($compile, $modal){
        return{
            templateUrl: 'client/psDashboard/psWidgetBodyTemplate.html',
            link: function(scope, element, attrs){
                var newElement = angular.element(scope.item.template);
                element.append(newElement);

                $compile(newElement)(scope);

                scope.close = function(){
                    scope.widgets.splice(scope.widgets.indexOf(scope.item), 1)
                }

                scope.settings = function(){
                    var options = {
                        templateUrl: scope.item.widgetSettings.templateUrl,
                        controller: scope.item.widgetSettings.controller,
                        scope: scope
                    }
                    $modal.open(options)
                }

                scope.closeModal = function(){
                    console.log("close modal called");
                    $modal.close();
                };

                scope.iconClicked = function(){
                    //empty function body
                    // a fix for mobile - hijack the hover/touch event
                }
            }
        }
    }]);