var stag = require('./libraries/veseo.js');  
var testData = require('./libraries/veseo.json');
var path = require('path');
var JobTitle = 'Mason';
var industry = 'IT';
var jobType = 'Permanent';
var employmentType = 'Full Time';
var companyName = 'Veseo'
var fileToUpload = './libraries/Gab.jpg'
  
  
  
describe('Circlepix Home Page Login', function() {  
  
  
  it('User should go to the homepage', function() {  
    stag.go();  
	element(by.linkText('Home')).click();
	expect(browser.getTitle()).toContain("WelinktalentClient");
	
  });  

  it('should let user log in ', function() {
	var EC = protractor.ExpectedConditions; 
	stag.login(testData[0].username, testData[0].passwordField);
	var yourElement = element(by.css('#searchWhat'));
	browser.wait(EC.presenceOf(yourElement), 5000);
	expect(browser.getCurrentUrl()).toContain("/admin/home");
	
  });  
  
   it('Posting a Job', function() {
	var EC = protractor.ExpectedConditions; 
	var yourElement = element(by.buttonText('Create a Job'));
	browser.wait(EC.presenceOf(yourElement), 5000);
	
	element(by.buttonText('Create a Job')).click();
	element(by.css("input[name=title]")).click();
	element(by.css("input[name=title]")).sendKeys(JobTitle);
	element(by.css("input[name=industry]")).click();
	element(by.css("input[name=industry]")).sendKeys(industry);
	element(by.cssContainingText('option', jobType)).click();
	element(by.cssContainingText('option', employmentType)).click();
	element(by.css("input[name=years_experience]")).click();
	element(by.css("input[name=years_experience]")).sendKeys('35');
	element(by.css("input[name=expertise]")).click();
	element(by.css("input[name=expertise]")).sendKeys('Tigs-Tigs'); 
	element(by.css("input[name=application_slots]")).sendKeys('30');
	element(by.cssContainingText('option', 'SGD')).click();
	element(by.css("input[name=salary_from]")).click();
	element(by.css("input[name=salary_from]")).sendKeys('3000');
	element(by.css("input[name=salary_to]")).click();
	element(by.css("input[name=salary_to]")).sendKeys('5000');
	
	var list = element.all(by.css('input[name=i]'));
	var add = element.all(by.css(".add-button"));
	list.get(0).sendKeys('eater');
	list.get(1).sendKeys('Know how to ear mosquito');
	list.get(2).sendKeys('Dancer');
	var description = element.all(by.tagName('textarea'));
	description.get(0).sendKeys('Test all you can until you loss your breath away....');
	
	
	element(by.css("input[name=name]")).click();
	element(by.css("input[name=name]")).sendKeys(companyName);
	element(by.css("input[name=address]")).click();
	element(by.css("input[name=address]")).sendKeys('123 test');
	
	list.get(3).sendKeys('0938483848');
	element.all(by.tagName('input')).get(15).sendKeys('joe@veseo.com');
	var absolutePath = path.resolve(__dirname,fileToUpload);
	$('input[type="file"]').sendKeys(absolutePath);

	description.get(1).sendKeys('Test all you can until you loss your breath away....');
	element(by.buttonText('SAVE')).click();
	
	var readmore = element(by.linkText('Read More'));
	browser.wait(EC.presenceOf(readmore), 5000);
	element.all(by.linkText('Read More')).get(0).click();
	
	var cardTitle = element(by.css('.card-title'));
	browser.wait(EC.presenceOf(cardTitle), 5000);
	var recentJob = element.all(by.css('.job-title'));
	expect(recentJob.get(0).getText()).toBe('parlor')
	var slot = element.all(by.css('.card-title'));
	expect(slot.get(0).getText()).toBe('30')
	//var info = element(by.css(".col-md-6"));


	
	
	element.all(by.css(".col-md-6")).getText().then(function (text) {
		
		//console.log(text);
		expect(text[1]).toBe('Full Time');
		expect(text[3]).toBe('123 test');
		expect(text[5]).toBe('IT');
		expect(text[7]).toBe('Tigs-Tigs');
		expect(text[9]).toBe('3000'); //expect this to be failed since on the read more page, its displayed 3 instead of 3000.
		expect(text[11]).toBe('5000'); //expect this to be failed since on the read more page, its displayed 5 instead of 5000.
		expect(text[13]).toBe('Veseo');
		expect(text[15]).toBe('0938483848');
		expect(text[17]).toBe('joe@veseo.com');
	});
	
	element.all(by.css("p")).getText().then(function (desc) {
		
		//console.log(desc);
		expect(desc[2]).toBe('Test all you can until you loss your breath away....');
		expect(desc[3]).toBe('Test all you can until you loss your breath away....');

	});
	
	element.all(by.css("li")).getText().then(function (lst) {
		
		//console.log(lst);
		expect(lst[5]).toBe('eater');
		expect(lst[6]).toBe('Know how to ear mosquito');
		expect(lst[7]).toBe('Dancer');
	});
	
	
  }); 
  
  
});	