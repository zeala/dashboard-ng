angular.module('app').controller("localStockController",
    [ "$scope", "dataService", function($scope, dataService){

        $scope.someVar = "default value";
        $scope.isLoaded = false;

        $scope.saveProperty = function(modelId, val){
            console.log("--- calling save property on the parent");
            console.log(modelId);
            console.log(val);
            $scope[modelId] = val;
        };

        dataService.getStocks().then(function(data){
            $scope.stocks = data.symbols;
            $scope.chartSize = data.chartSize;
            $scope.chartTimeSpan = data.chartTimeSpan;
            $scope.chartType = data.chartType;
            $scope.movingAverageIndicator = data.movingAverageIndicator;
            $scope.technicalIndicators2 = data.technicalIndicators2;

            $scope.isLoaded = true;

            for (var i=0; i < data.symbols.length; i++){
                if (data.symbols[i].id == $scope.item.widgetSettings.id){
                    $scope.selectedStock = data.symbols[i];
                }
            }
        });

        $scope.saveSettings = function(){
            //$scope.item.widgetSettings.id = $scope.selectedStock.id;
            $scope.item.widgetSettings.symbol = $scope.selectedStock.name;
            $scope.item.widgetSettings.chartType = $scope.selectedChartType;
            $scope.item.widgetSettings.chartTimeSpan = $scope.selectedChartTimeSpan;
            $scope.item.widgetSettings.chartSize = $scope.selectedChartSize;
            $scope.item.widgetSettings.movingAverageIndicator = $scope.selectedMovingAverageIndicator;
            $scope.item.widgetSettings.technicalIndicators2 = $scope.selectedTechnicalIndicators2

            $scope.$parent.selectedStock = $scope.selectedStock;

            var name = $scope.selectedStock ? "s=" + $scope.selectedStock.id : "";
            var chartType = $scope.selectedChartType
                ? "&q=" + $scope.selectedChartType.tag : "";

            var chartTimeSpan = $scope.selectedChartTimeSpan
                ? "&t=" +  $scope.selectedChartTimeSpan.tag : "";

            var ma = $scope.selectedMovingAverageIndicator
                ? "&p=" + $scope.selectedMovingAverageIndicator.tag : "";

            var techIndicator2 = $scope.selectedTechnicalIndicators2
                ? "&a=" + $scope.selectedTechnicalIndicators2.tag : "";

            var size = $scope.selectedChartSize
                ? "&z=" + $scope.selectedChartSize.tag : "&z=s";

            console.log("--------------");
            console.log("name : " + name);
            console.log("chartType : " + chartType);
            console.log("chartTypeSpan : " + chartTimeSpan);
            console.log("ma : " + ma);
            console.log("techIndicator2 : " + techIndicator2);



            var fullURL = $scope.item.widgetSettings.baseUrl +
                name +
                chartType +
                chartTimeSpan +
                ma +
                techIndicator2 +
                size;

            $scope.$parent.selectedStock.selectedStockGraphUrl = fullURL;


            console.log("FULL URL : ");
            console.log(fullURL)


            console.log("saving settings");
            console.log( $scope.item.widgetSettings);
            console.log($scope.selectedStock)
        };


    }])