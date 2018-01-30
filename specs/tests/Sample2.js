'use strict';

//var decache = require('decache');
//var sample=require('../pages/sampleObject.js');;
//var common=require('../commonUtils/common.js');
//afterAll(function(done) {
//    process.nextTick(done);
//});

//beforeEach(function(){
//
//    browser.get('https://uis-qa2.icsl.net:10446/ui/');
//    sample = require('../pages/sampleObject.js');
//    common = require('../commonUtils/common.js');
//});
//
//afterEach(function(){
//    
//    decache('../pages/sampleObject.js');
//    decache('../commonUtils/common.js');
//
//    
//});



describe('angularjs homepage 3', function() {
//    beforeAll(function(){
//         browser.get('https://uis-qa2.icsl.net:10446/ui/');
//         console.log('calling before all');
//     });
//
//     afterAll(function(done){
//         console.log('calling after all');
//         browser.close();
//         process.nextTick(done);
//     });
  it('should greet the named user 3', function() {
      
//      common.sendKeys(sample.searchBox,'Cars' );
//      common.click(sample.searchButton);
//      sample.searchButton.click();
    console.log('Sample 3 first it block');
    expect(2).toBe(2);
    
    
    });
  
  
  
  it('should greet the named user test3', function() {
      
//      common.sendKeys(sample.searchBox,'Cars' );
//      common.click(sample.searchButton);
//      sample.searchButton.click();
    console.log('Sample 3 second it block');
    expect(2).toBe(2);
   });
  

});