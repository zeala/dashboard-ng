"use strict";

angular.module('app').factory('dataService',
    ['$timeout', function ($timeout) {


        var stocks = {
            symbols: [
                {
                    id: "AAPL",
                    name: 'Apple',
                    description: 'Apple'
                },
                {
                    id: "MSFT",
                    name: 'Microsoft',
                    description: 'Microsolft'
                },
                {
                    id: "AMZN",
                    name: 'Amazon',
                    description: 'Amazon'
                },
                {
                    id: "GOOG",
                    name: 'Google Class C',
                    description: 'Google Class C'
                },
                {
                    id: "FB",
                    name: 'Facebook',
                    description: 'Facebook'
                },
                {
                    id: "GILD",
                    name: 'Gilead Sciences',
                    description: 'Gilead Science'
                },
                {
                    id: "INTC",
                    name: 'Intel',
                    description: 'Intel'
                },
                {
                    id: "GOOGl",
                    name: 'Google Class A',
                    description: 'Google Class A'
                },
                {
                    id: "CSCO",
                    name: 'Cisco',
                    description: 'Cisco'
                },
                {
                    id: "CMCSA",
                    name: 'Comcast Corp',
                    description: 'Comcast Corp'
                },
            ],

            chartTimeSpan: [
                {
                    id: "c1D",
                    name: "c1D",
                    tag: "1d",
                    description: "1 Day"
                },
                {
                    id: "c5D",
                    name: "c5D",
                    tag: "5d",
                    description: "5 Days"
                },
                {
                    id: "c3M",
                    name: "c3M",
                    tag: "3m",
                    description: "3 Months"
                },
                {
                    id: "c6M",
                    name: "c6M",
                    tag: "6m",
                    description: "6 Months"
                },
                {
                    id: "c1Y",
                    name: "c1Y",
                    tag: "1y",
                    description: "1 Year"
                },
                {
                    id: "c2Y",
                    name: "c2Y",
                    tag: "2y",
                    description: "2 Years"
                },
                {
                    id: "c5Y",
                    name: "c5Y",
                    tag: "5y",
                    description: "5 Years"
                },
                {
                    id: "cMax",
                    name: "cMax",
                    tag: "my",
                    description: "Maximum"
                }
            ],

            chartType: [
                {
                    id: "Line",
                    name: "Line",
                    description: "Line",
                    tag: "l"
                },

                {
                    id: "Bar",
                    name: "Bar",
                    description: "Bar",
                    tag: "b"
                },

                {
                    id: "Candle",
                    name: "Candle",
                    description: "Candle",
                    tag: "c"
                }
            ],

            movingAverageIndicator : [
                {
                    id: "m5",
                    name: "m5",
                    description: "5",
                    tag: "5"
                },
                {
                    id: "m10",
                    name: "m10",
                    description: "10",
                    tag: "10"
                },
                {
                    id: "m20",
                    name: "m20",
                    description: "20",
                    tag: "20"
                },
                {
                    id: "m50",
                    name: "m50",
                    description: "50",
                    tag: "50"
                },
                {
                    id: "m100",
                    name: "m100",
                    description: "100",
                    tag: "100"
                },
                {
                    id: "m200",
                    name: "m200",
                    description: "200",
                    tag: "200"
                }
            ],

            technicalIndicators2 : [
                {
                    name: "Fast_Stoch",
                    description: "Stochastic",
                    tag: "fs"
                },
                {
                    name: "MACD",
                    description: "Moving-Average-Convergence-Divergence",
                    tag: "m26-12-9"
                },
                {
                    name: "MFI",
                    description: "Money Flow Index",
                    tag: "f14"
                },
                {
                    name: "ROC",
                    description: "Rate of Change",
                    tag: "p12"
                },
                {
                    name: "RSI",
                    description: "Relative Strength Index",
                    tag: "r14"
                },
                {
                    name: "Slow_Stoch",
                    description: "Slow Stochastic",
                    tag: "ss"
                },
                {
                    name: "Vol",
                    description: "Volume",
                    tag: "v"
                },
                {
                    name: "Vol_MA",
                    description: "Volume with Moving Average",
                    tag: "vm"
                },
                {
                    name: "W_R",
                    description: "Williams Percent Range",
                    tag: "w14"
                },
                {
                    name: "Bollinger_Bands",
                    description: "Bollinger Bands",
                    tag: "b"
                },
                {
                    name: "Parabolic_SAR",
                    description: "Parabolic Stop And Reverse",
                    tag: "p"
                },
                {
                    name: "Splits",
                    description: "Splits",
                    tag: "s"
                },
                {
                    name: "Volume",
                    description: "Volume (inside chart)",
                    tag: "v"
                },
            ],

            chartSize: [
                {
                    name: "Large",
                    description: "Large",
                    tag: "l"
                },
                {
                    name: "Middle",
                    description: "Middle",
                    tag: "m"
                },
                {
                    name: "Small",
                    description: "Small",
                    tag: "s"
                }
            ],


    };



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