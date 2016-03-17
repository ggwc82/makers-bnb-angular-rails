'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('MakersBnB', function() {
  describe('spaces default list view', function() {

    beforeEach(function() {
      browser.get('index.html')
    });

    it('should display a list of current spaces by default', function() {

      var defaultList = element.all(by.repeater('space in spaces'));
      expect(defaultList.count()).toBe(25);
    });
  });
});