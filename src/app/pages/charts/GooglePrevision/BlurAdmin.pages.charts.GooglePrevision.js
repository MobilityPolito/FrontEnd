(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.GooglePrevision', [])
    .config(routeConfig);
    // .controller('LineChartPDFCtrl', LineChartPDFCtrl)
    // .controller('LineChartCDFCtrl', LineChartCDFCtrl);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.GooglePrevision', {
          url: '/GooglePrevision',
          templateUrl: 'app/pages/charts/GooglePrevision/GooglePrevision.html',
          title: 'Comparison with GooglePrevision',
          sidebarMeta: {
            order: 40,
          },
        });
  }

})();