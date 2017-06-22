/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'BlurAdmin.pages.dashboard',
    // 'BlurAdmin.pages.ui',
    // 'BlurAdmin.pages.components',
    // 'BlurAdmin.pages.form',
    // 'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    // 'BlurAdmin.pages.profile',
    'BlurAdmin.pages.ODmatrix'
  ])
      // .config(routeConfig)

      .factory('stats', ['$http','$rootScope', function($http, $rootScope){

        var stats = {};
        stats.list = [];

        stats.update = function(startDate, endDate){

          var req = {
          method: 'post',
          url: 'http://turinmobility.tk/stats',
          data: JSON.stringify(
             { start : startDate,
               end: endDate })
          };
        
         $rootScope.spinner = {active:true};
          $http(req).then(function(data, status, headers, config){
            stats.list = data;
            $rootScope.spinner = {active:false};
            // console.log(data);

          }, function(data, status, headers, config){
            // console.log(data);
          });
        }

        return stats;

      }]).run(['stats', function (stats) {

          var startDate = new Date('2017-01-25T01:00:00');
          var endDate = new Date('2017-01-30T23:59:00');

          stats.update(startDate, endDate);
}]);;

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
  }

})();
