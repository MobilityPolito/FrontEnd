/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs2DCtrl', chartJs2DCtrl)
    .controller('chartJs2DCtrl2', chartJs2DCtrl2)
    .controller('chartJs2DCtrl3', chartJs2DCtrl3);

  function chartJs2DCtrl3($rootScope, $scope, stats) {

    $scope.series = ['Car2Go min', 'Enjoy min','Car2Go max', 'Enjoy max'];

    $scope.options = {
         legend: {
              display: true,
              position: 'bottom'
          },
         title: {
              display: false,
              text: 'Bill min vs max'
          },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Bill'
            }
          }]
        }
      };

    $scope.$watch(function() { return stats.list; }, function(newVal, oldVal) {

      $scope.labels = newVal.data[2].index;

      $scope.data = [
        newVal.data[2].car2go_min,
        newVal.data[2].enjoy_min,
        newVal.data[2].car2go_max,
        newVal.data[2].enjoy_max,
      ];

    }, true);
  }

  function chartJs2DCtrl2($rootScope, $scope, stats) {

    $scope.series = ['Car2Go', 'Enjoy'];

    $scope.options = {
         legend: {
              display: true,
              position: 'bottom'
          },
         title: {
              display: false,
              text: 'Probability CarSharing due to PT Duration'
          },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Probability [p]'
            }
          }],

          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Duration [min]'
            }
          }],

        }
      };

    $scope.$watch(function() { return stats.list; }, function(newVal, oldVal) {

      $scope.labels = newVal.data[1].index;

      $scope.data = [
        newVal.data[1].car2go,
        newVal.data[1].enjoy
      ];

    }, true);
  }

  /** @ngInject */
  function chartJs2DCtrl($rootScope, $scope, stats) {

    $scope.labels =["00:00",
                    "01:00",
                    "02:00", 
                    "03:00", 
                    "04:00", 
                    '05:00',
                    '06:00',
                    '07:00',
                    '08:00',
                    '09:00',
                    '10:00',
                    '11:00',
                    '12:00',
                    '13:00',
                    '14:00',
                    '15:00',
                    '16:00',
                    '17:00',
                    '18:00',
                    '19:00',
                    '20:00',
                    '21:00',
                    '22:00',
                    '23:00'];

    $scope.series = ['Enjoy Business', 'Enjoy Weekend', 'Car2Go Business', 'Car2Go Weekend'];

    $scope.options = {
         legend: {
              display: true,
              position: 'bottom'
          },
         title: {
              display: false,
              text: 'Bookings'
          },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Number of Bookings [k]'
            }
          }]
        }
      };

    $scope.$watch(function() { return stats.list; }, function(newVal, oldVal) {

      $scope.data = [
        newVal.data[0].enjoy_business,
        newVal.data[0].enjoy_weekend,
        newVal.data[0].car2go_business,
        newVal.data[0].car2go_weekend
      ];

    }, true);

    // $scope.labels =["00:00",
    //                 "01:00",
    //                 "02:00", 
    //                 "03:00", 
    //                 "04:00", 
    //                 '05:00',
    //                 '06:00',
    //                 '07:00',
    //                 '08:00',
    //                 '09:00',
    //                 '10:00',
    //                 '11:00',
    //                 '12:00',
    //                 '13:00',
    //                 '14:00',
    //                 '15:00',
    //                 '16:00',
    //                 '17:00',
    //                 '18:00',
    //                 '19:00',
    //                 '20:00',
    //                 '21:00',
    //                 '22:00',
    //                 '23:00'];

    // $scope.series = ['Car Sharing', 'Public Transport'];

    // $scope.options = {
    //      legend: {
    //           display: true,
    //           position: 'bottom'
    //       },
    //      title: {
    //           display: false,
    //           text: 'Car Sharing vs Public Transport'
    //       },
    //     scales: {
    //       yAxes: [{
    //         scaleLabel: {
    //           display: true,
    //           labelString: 'Duration [min]'
    //         }
    //       }]
    //     }
    //   };

    // $scope.$watchCollection(function() { return stats.list; }, function(newVal, oldVal) {

    //   $scope.data = [
    //     newVal.data[0].car,
    //     newVal.data[0].pt
    //   ];

    // }, true);

  }

})();