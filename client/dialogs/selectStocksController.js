'use strict';

angular.module('app').controller('selectStockController',
    ['$scope', 'dataService',
        function($scope, dataService){

            $scope.isLoaded = false;
            dataService.getStocks().then(function(data){
                $scope.stocks = data;
                $scope.isLoaded = true;

                for (var i=0; i < data.length; i++){
                    if (data[i].id == $scope.item.widgetSettings.id){
                        $scope.selectedStock = data[i];
                    }
                }
            });

            $scope.saveSettings = function(){
                $scope.item.widgetSettings.id = $scope.selectedStock.id;
                $scope.$parent.selectedStock = $scope.selectedStock;
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