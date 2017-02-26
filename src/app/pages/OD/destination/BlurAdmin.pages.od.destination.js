(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ODmatrix.destination', [])
    .config(routeConfig);
    // .controller('LineChartPDFCtrl', LineChartPDFCtrl)
    // .controller('LineChartCDFCtrl', LineChartCDFCtrl);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('od.destination', {
          url: '/destination',
          templateUrl: 'app/pages/OD/destination/destination.html',
          title: 'Destinations',
          sidebarMeta: {
            order: 3,
          },
        });
  }

})();