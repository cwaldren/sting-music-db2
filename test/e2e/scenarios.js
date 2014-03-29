'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Sting music app', function() {

  beforeEach(function() {
    browser().navigateTo('../../index.html');
  });


  it('should automatically redirect to /view when location or hash empty', function() {
    expect(browser().location().url()).toBe("/view");
  });


  describe('view', function() {

    beforeEach(function() {
      browser().navigateTo('#/view');
    });


    it('should render view when user navigates to /view', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view/);
    });

  });

});
