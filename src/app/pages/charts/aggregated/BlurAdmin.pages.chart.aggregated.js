(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.aggregated', [])
    .config(routeConfig);
    // .controller('LineChartPDFCtrl', LineChartPDFCtrl)
    // .controller('LineChartCDFCtrl', LineChartCDFCtrl);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.aggregated', {
          url: '/aggregated',
          templateUrl: 'app/pages/charts/aggregated/aggregated.html',
          title: 'Hour Stats',
          sidebarMeta: {
            order: 2,
          },
        });
  }

})();