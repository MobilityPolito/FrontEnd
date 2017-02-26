/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ODmatrix', [
      'BlurAdmin.pages.ODmatrix.origin',
      'BlurAdmin.pages.ODmatrix.destination'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('od', {
          url: '/od',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'OD Matrix',
          sidebarMeta: {
            icon: 'ion-arrow-right-b',
            order: 150,
          },
        });
  }

})();
