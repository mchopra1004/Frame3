
var common = function() {

this.click = function(locator){
    locator.click();
    
}

this.executorClick = function(locator){
   
    browser.executeScript("arguments[0].click();", locator.getWebElement());

}

this.sendKeys = function(locator, value){
   
    locator.sendKeys(value);

}

this.wait = function(locator, message){
    
    browser.wait(EC.visibilityOf(locator), 120000, message);
    
}

this.sleep = function(value){
    
    browser.sleep(value);
}

this.elementIsDisplayed = function(locator){
    
    expect(locator.isDisplayed()).toBeTruthy();
}

this.getText = function(locator,value){
    
    expect(locator.getText()).toEqual(value);
}
};

module.exports = new common();