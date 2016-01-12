"use strict";

angular.module('app').factory('dataService',
    ['$timeout', function ($timeout) {

    var locations = [
        {
            id: 1000,
            name: 'Raquette River',
            temperature: 55,
            guides: 20,
            rafts: 18,
            vests: 200,
            image: '/river1.png'
        },
        {
            id: 1001,
            name: 'Black River',
            temperature: 53,
            guides: 36,
            rafts: 22,
            vests: 250,
            image: '/river2.png'
        },
        {
            id: 1002,
            name: 'Hudson River',
            temperature: 58,
            guides: 56,
            rafts: 40,
            vests: 500,
            image: '/river3.png'
        },
        {
            id: 1003,
            name: 'Hudson Gorge',
            temperature: 39,
            guides: 8,
            rafts: 10,
            vests: 40,
            image: '/river4.png'
        },
        {
            id: 1004,
            name: 'Saranac River',
            temperature: 32,
            guides: 8,
            rafts: 8,
            vests: 100,
            image: '/river1.png'
        },
        {
            id: 1005,
            name: 'Black Creek',
            temperature: 34,
            guides: 22,
            rafts: 12,
            vests: 230,
            image: '/river2.png'
        },
        {
            id: 1006,
            name: 'Batten Kill',
            temperature: 54,
            guides: 20,
            rafts: 24,
            vests: 420,
            image: '/river3.png'
        },
        {
            id: 1007,
            name: 'Ausable River',
            temperature: 38,
            guides: 12,
            rafts: 8,
            vests: 225,
            image: '/river4.png'
        }
    ];

    var stocks = [
        {
            id: 5000,
            name: 'test',
            location: 'Raquette River',
            image: 'http://chart.finance.yahoo.com/z?s=GOOG&t=6m&q=l&l=on&z=l&p=m50,e200,v'
        },
        {
            id: 5001,
            name: 'test',
            location: 'Saranac River',
            image: 'http://chart.finance.yahoo.com/z?s=GOOG&t=6m&q=l&l=on&z=l&p=m50,e200,v'
        },
        {
            id: 5002,
            name: 'test',
            location: 'Black Creek',
            image: 'http://chart.finance.yahoo.com/z?s=GOOG&t=6m&q=l&l=on&z=l&p=m50,e200,v'
        },
        {
            id: 5003,
            name: 'test',
            location: 'Ausable River',
            image: 'http://chart.finance.yahoo.com/z?s=GOOG&t=6m&q=l&l=on&z=l&p=m50,e200,v'
        },
        {
            id: 5004,
            name: 'test',
            location: 'Batten Kill',
            image: 'http://chart.finance.yahoo.com/z?s=GOOG&t=6m&q=l&l=on&z=l&p=m50,e200,v'
        }
    ];

    var getLocations = function () {
        return $timeout(function () {
            return locations;
        }, 500);
    };

    var getLocation = function (id) {
        return $timeout(function () {
            for (var i = 0; i < locations.length; i++)
                if (locations[i].id == id)
                    return locations[i];
            return undefined;
        }, 300);
    };

    var getStocks = function () {
        return $timeout(function () {
            return stocks;
        }, 500);
    };

    var getStock = function (id) {
        return $timeout(function () {
            for (var i = 0; i < stocks.length; i++)
                if (stocks[i].id == id)
                    return stocks[i];
            return undefined;
        }, 300);
    };


    return {
        getLocations: getLocations,
        getLocation: getLocation,
        getStocks: getStocks,
        getStock: getStock
    };
}]);