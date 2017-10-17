'use strict';  
  
module.exports = {  

      
    go: function() {  
		
		//browser.ignoreSynchronization = true;
        browser.get('http://52.221.195.196/'); //overrides baseURL  
		browser.driver.manage().window().maximize();
        browser.waitForAngular();  
    },  
      
    login: function(username,pass) {  
		
		
		browser.sleep(1000);
		element(by.css('#username')).click();
		browser.sleep(1000);
		element(by.css('#username')).sendKeys(username);
		browser.sleep(1000);
		element(by.css('#password')).click();
		browser.sleep(1000);
		element(by.css('#password')).sendKeys(pass);
		browser.sleep(1000);
		element(by.buttonText('Sign in')).click();
		browser.sleep(1000);
		

    }  
};