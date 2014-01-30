'use strict';

/* Directives */
angular.module('myApp.directives', 
  ['myApp.services']) // require the myApp.services module

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    return elm.text(version);
  };
}]);
