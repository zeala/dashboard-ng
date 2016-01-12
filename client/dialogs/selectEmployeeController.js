'use strict';

angular.module('app').controller('selectEmployeeController',
    ['$scope', 'dataService',
        function($scope, dataService){

            $scope.isLoaded = false;
            dataService.getEmployees().then(function(data){
                $scope.employees = data;
                $scope.isLoaded = true;

                for (var i=0; i < data.length; i++){
                    if (data[i].id == $scope.item.widgetSettings.id){
                        $scope.selectedEmployee = data[i];
                    }
                }
            });

            $scope.saveSettings = function(){
                $scope.item.widgetSettings.id = $scope.selectedEmployee.id;
                $scope.$parent.selectedEmployee = $scope.selectedEmployee;
                $scope.$close();
                $scope.closeModal();
            };

            $scope.closeModal = function(){
                console.log("should close modal");
                $('div.modal').removeClass('fade').addClass('hidden');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            }
        }
    ])