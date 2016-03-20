'use strict';

describe('MakersBnB', function() {
  describe('spaces default list view', function() {

    beforeEach(function() {
      browser.get('index.html')
      var defaultList = element.all(by.repeater('space in spaces'));
    });

    it('should display a list of current spaces by default', function() {
      expect(defaultList.count()).toBe(25);
    });

    it('should allow a user to add a new space', function(){
      var createSpaceButton = element(by.id('create-space'));
      button.click();
      var nameBox = element(by.id('name-box'));
      var priceBox = element(by.id('price-box'));
      var locationBox = element(by.id('location-box'));
      var sizeBox = element(by.id('size-box'));
      var propertyTypeBox = element(by.id('property-type-box'));
      var submitButton = element(by.id('submit-button'));
      nameBox.sendKeys('my place');
      priceBox.sendKeys(250);
      locationBox.sendKeys('Scotland');
      sizeBox.sendKeys(3000);
      propertyTypeBox('castle');
      submitButton.click();
      expect(page).to have_content('Space was successfully created');
    })
  });
});