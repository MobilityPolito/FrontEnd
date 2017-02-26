(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.PublicTransport', [])
    .config(routeConfig)
    .controller('linecar_vs_pt', linecar_vs_pt);
    // .controller('LineChartCDFCtrl', LineChartCDFCtrl);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.PublicTransport', {
          url: '/PublicTransport',
          templateUrl: 'app/pages/charts/PublicTransport/PublicTransport.html',
          title: 'Comparison with PublicTransport',
          sidebarMeta: {
            order: 30,
          },
        });
  }

  function linecar_vs_pt($scope, baConfig, $element, layoutPaths){

    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var lineChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      marginTop: 0,
      marginRight: 15,
      dataProvider: [
        {
          JJ: '5',
          value: -0.17
        },
        {
          JJ: '6',
          value: -0.05
        },
        {
          JJ: '7',
          value: 0.17
        },
        {
          JJ: '8',
          value: -0.17
        },
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      graphs: [
        {
          id: 'g1',
          balloonText: '[[value]]',
          bullet: 'round',
          bulletSize: 8,
          lineColor: layoutColors.danger,
          lineThickness: 1,
          negativeLineColor: layoutColors.warning,
          type: 'smoothedLine',
          valueField: 'value'
        }
      ],
      chartScrollbar: {
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
        categoryBalloonDateFormat: 'JJ',
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
        fullWidth: true
      },
      dataDateFormat: 'JJ',
      categoryField: 'hour',
      categoryAxis: {
        minPeriod: 'JJ',
        parseDates: true,
        minorGridAlpha: 0.1,
        minorGridEnabled: true,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
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

  }


})();