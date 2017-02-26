/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs1DCtrl', chartJs1DCtrl);

  /** @ngInject */
  function chartJs1DCtrl($scope, baConfig, stats) {
    var layoutColors = baConfig.colors;

    $scope.labels =["Car2Go", "Enjoy"];
    $scope.options = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: layoutColors.defaultText
        }
      }
    };

      $scope.fleet = [
        385,
        197
      ]

    $scope.$watch(function() { return stats.list; }, function(newVal, oldVal) {

      $scope.data = [
        newVal.data[4].car2go,
        newVal.data[4].enjoy,
      ];

      $scope.books_car = [
        Math.floor(newVal.data[4].car2go/$scope.fleet[0]/newVal.data[4].days),
        Math.floor(newVal.data[4].enjoy/$scope.fleet[1]/newVal.data[4].days)
      ]

    }, true);

  }

})();