angular.module('app').config(function($provide){
    console.log(" angular module config for exceptions")
    $provide.decorator("$exceptionHandler", ["$delegate", function($delegate){
        return function(exception, cause){
            $delegate(exception, cause);
            alert(exception.message);
        }
    }])
})