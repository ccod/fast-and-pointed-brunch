describe("filter", function() {
  beforeEach(module("myApp.filters"));

  describe("interpolate", function() {

    beforeEach(module(function($provide) {
      $provide.value("version", "TEST_VER");
    }));
    
    it("replaces VERSION", inject(function(interpolateFilter) {
      expect(interpolateFilter("before %VERSION% after"))
        .toEqual("before TEST_VER after");
    }));
  });
});
