(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ODmatrix.origin', [])
    .config(routeConfig);
    // .controller('LineChartPDFCtrl', LineChartPDFCtrl)
    // .controller('LineChartCDFCtrl', LineChartCDFCtrl);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('od.origin', {
          url: '/origin',
          templateUrl: 'app/pages/OD/origin/origin.html',
          title: 'Origins',
          sidebarMeta: {
            order: 2,
          },
        });
  }

})();