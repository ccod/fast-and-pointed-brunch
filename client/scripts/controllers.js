'use strict';

/* Controllers */
angular.module('myApp.controllers', [])

.controller('AppCtrl', ["$scope", "$http", function($scope, $http) {
  return $http({
    method: 'GET',
    url: '/api/name'
  })

  .success(function(data, status, headers, config) {
    return $scope.name = data.name;
  })

  .error(function(data, status, headers, config) {
    return $scope.name = 'Error!';
  });
}])

.controller('MyCtrl1', ["$scope", function($scope) {
  // write Ctrl here
}])

.controller('MyCtrl2', ["$scope", function($scope) {
  // write Ctrl here
}]);
