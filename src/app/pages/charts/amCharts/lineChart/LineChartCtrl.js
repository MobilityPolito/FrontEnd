/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('LineChartCtrl', LineChartCtrl);

  /** @ngInject */
  function LineChartCtrl($scope, baConfig, $element, layoutPaths, stats) {
    var layoutColors = baConfig.colors;
    // console.log(layoutColors);
    var id = $element[0].getAttribute('id');

    $scope.$watch(function() { return stats.list; }, function(newVal, oldVal) {

      // console.log(newVal.data[3]);

      var data = new Array();
      for (var i=0; i < newVal.data[3].index.length; i++){
        // console.log(newVal.data[3].enjoy[i]);

        var json = { date: AmCharts.stringToDate(newVal.data[3].index[i], "YYYY/MM/DD JJ:NN"),
                     value2: newVal.data[3].car2go[i],
                     value: newVal.data[3].enjoy[i]
                   };

        data.push(json);

      }

      $scope.data = data;

      // console.log($scope.data);

    var lineChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      marginTop: 0,
      marginRight: 15,
      dataProvider: $scope.data,
      titles: [
        {
          "text": "Average Number of Bookings aggregated by hour",
          "size": 12
        }
      ],
      legend: {
        "useGraphSettings": true,
        color: '#000000',
        enabled: true
      },
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          gridAlpha: 0.5,
          gridColor: layoutColors.border
        }
      ],
      graphs: [
        {
          id: 'g1',
          title: 'enjoy',
          balloonText: '[[value]]',
          bullet: 'round',
          bulletSize: 8,
          lineColor: layoutColors.danger,
          lineThickness: 1,
          negativeLineColor: layoutColors.warning,
          type: 'smoothedLine',
          valueField: 'value'
        },
        {
          id: 'g2',
          title: 'car2go',
          balloonText: '[[value]]',
          bullet: 'round',
          bulletSize: 8,
          lineColor: layoutColors.info,
          lineThickness: 1,
          negativeLineColor: layoutColors.warning,
          type: 'smoothedLine',
          valueField: 'value2'
        }
      ],
      chartScrollbar: {
        autoGridCount: true,
        graph: 'g1',
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 55,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineAlpha: 0.5,
        fullWidth: false
      },
      dataDateFormat: '"YYYY/MM/DD"',
      categoryField: 'date',
      categoryAxis: {
          minPeriod: 'hh',
          parseDates: true,
          dashLength: 1,
          minorGridAlpha: 0.1,
          minorGridEnabled: true,
          gridAlpha: 0.5,
          gridColor: layoutColors.border
      }, 
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });

    lineChart.addListener('rendered', zoomChart);
    if (lineChart.zoomChart) {
      lineChart.zoomChart();
    }

    function zoomChart() {
      lineChart.zoomToIndexes(Math.round(lineChart.dataProvider.length * 0.4), Math.round(lineChart.dataProvider.length * 0.55));
    }

    }, true);

  }

})();
