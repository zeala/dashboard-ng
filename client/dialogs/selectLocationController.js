'use strict';

angular.module('app').controller('selectLocationController',
    ['$scope', 'dataService',
        function($scope, dataService){
            $scope.isLoaded = false;

            dataService.getLocations().then(function(data){
                $scope.locations = data;
                $scope.isLoaded = true;

                for (var i = 0; i < data.length ; i++){
                    if (data[i].id == $scope.item.widgetSettings.id){
                        $scope.selectedLocation = data[i];
                    }
                }
            });

            $scope.saveSettings = function(){
                $scope.item.widgetSettings.id = $scope.selectedLocation.id;
                $scope.$parent.selectedLocation = $scope.selectedLocation;
                $scope.$close();
                $scope.closeModal();
            }


            $scope.closeModal = function(){
                $('div.modal').removeClass('fade').addClass('hidden');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            }
        }
    ])