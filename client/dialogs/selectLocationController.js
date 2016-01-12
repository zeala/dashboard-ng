'use strict';

angular.module('app').controller('selectLocationController',
    ['$scope', 'dataService',
        function($scope, dataService){
            $scope.closeModal = function(){
                console.log("should close modal");
                $('div.modal').removeClass('fade').addClass('hidden');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();

                console.log("--- scope .parent ");
                console.log($scope.$parent);
            }
        }
    ])