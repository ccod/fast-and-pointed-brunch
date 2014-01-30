describe("app navigation", function() {
  beforeEach(function() {
    browser().navigateTo("/");
  });

  it("redirects to /view1 when location hash/fragment is empty", function() {
    expect(browser().location().url()).toBe("/view1");
  });

  it("navigates to /view2 when the user clicks the view2 link", function() {
    element('a[href="view2"]').click();
    expect(browser().location().url()).toBe("/view2");
  });
});
