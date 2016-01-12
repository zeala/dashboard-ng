'use strict';

angular.module('app').controller('selectEmployeeController',
    ['$scope', 'dataService',
        function($scope, dataService){
            $scope.closeModal = function(){
                console.log("should close modal");
                $('div.modal').removeClass('fade').addClass('hidden');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            }
        }
    ])