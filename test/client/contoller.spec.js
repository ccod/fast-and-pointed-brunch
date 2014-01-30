'use strict';

describe("controllers", function() {
  beforeEach(module("myApp.controllers"));
  describe("AppCtrl", function() {
    it("fetches name from the backend",
       inject(function($rootScope, $controller, $httpBackend) {
      var scope = $rootScope.$new();

      $httpBackend.expectGET('/api/name').respond({ name: "bla" });
      var ctrl = $controller("AppCtrl", { $scope: scope });
      $httpBackend.flush();

      expect(scope.name).toEqual("bla");
    }));
  });
});
