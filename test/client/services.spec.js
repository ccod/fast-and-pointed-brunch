describe("service", function() {

  beforeEach(module("myApp.services"));

  describe("version", function() {
    it("returns current version", inject(function(version) {
      expect(version).toEqual("0.1");
    }));
  });
});
