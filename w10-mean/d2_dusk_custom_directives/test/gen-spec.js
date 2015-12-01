/*
 * TESTS - PROTRACTOR 
 */

 // HERE ARE YOUR PROTRACTOR TESTS
 // TO RUN THEM RUN THE FOLLOWING IN THE TERMINAL
 // $ webdriver-manager start 
 // $ protractor test/conf.js

describe('Home Page', function() {
  it('should have the correct title', function() {
    browser.get('http://localhost:1337/');
    expect(browser.getTitle()).toEqual('MEAN Seed');
  });
})