var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['veseoTest.js'],
  
  multiCapabilities: [{
    browserName: 'chrome'
  }],
  
  
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './target/screenshots',
		  fileName: 'MyReportName',
		  showPassed : true,

        })
      );
   },
   
     jasmineNodeOpts: {
    realtimeFailure: true,
	defaultTimeoutInterval: 2500000
  }
}