angular.module('myApp',
  ['ngCookies', 
   'ngResource', 
   'ngRoute', 
   'myApp.controllers', 
   'myApp.directives', 
   'myApp.filters', 
   'myApp.services', 
   'partials'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/view1', {
    templateUrl: '/partials/partial1.html',
    controller: 'MyCtrl1'
  })

  .when('/view2', {
    templateUrl: '/partials/partial2.html',
    controller: 'MyCtrl2'
  })
    
  .otherwise({
    redirectTo: '/view1'
  });

  return $locationProvider.html5Mode(true);
});
