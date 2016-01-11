'use strict';

angular.module('psMenuModule').controller('psMenuController',
    ['$scope', '$rootScope' , function($scope, $rootScope){

        $scope.showMenu = true;
        $scope.isVertical = true;
        $scope.openMenuScope = null;
        $scope.allowHorizontalToggle = true;

        this.setActiveElement = function(el){
            $scope.activeElement = el;
        };

        this.getActiveElement = function(){
            return $scope.activeElement;
        };

        this.isVertical = function(){
            return $scope.isVertical;
        }

        this.setRoute = function(route){
            $rootScope.$broadcast("ps-menu-item-selected-event",
                {route: route});
        };

        this.setOpenMenuScope = function(scope){
            $scope.openMenuScope = scope;
        };

        $scope.toggleMenuOrientation = function(){

            //close any open menu
            if ($scope.openMenuScope){
                $scope.openMenuScope.closeMenu();
            }
            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast("ps-menu-orientation-changed-event",
                {isMenuVertical: $scope.isVertical});
        };

        $scope.$on('ps-menu-show', function(event, data){
            $scope.showMenu = data.show;
            $scope.isVertical = data.isVertical;
            $scope.allowHorizontalToggle = data.allowHorizontalToggle;
        });

        angular.element(document).bind("click", function(e){

            console.log("click is called - angular binding ")
            if ($scope.openMenuScope && !$scope.isVertical){
                if ($(e.target).parent().hasClass('ps-selectable-item')){
                    return;
                }
                $scope.$apply(function(){
                    $scope.openMenuScope.closeMenu();
                });

                e.stopPropagation();
                e.preventDefault();
            }
        });
    }
    ]);