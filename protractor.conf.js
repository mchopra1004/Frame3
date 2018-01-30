
var suites = require('./suites.js').suites;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var path = require('path');
var d = new Date();
var n = d.getTime();

var month;
month = [];
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = "July";
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';

exports.config = {
        // ----- How to setup Selenium -----
        //
        // There are three ways to specify how to use Selenium. Specify one of the
        // following:
        //
        // 1. seleniumServerJar - to start Selenium Standalone locally.
        // 2. seleniumAddress - to connect to a Selenium server which is already
        //    running.
        // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.
            directConnect: true,
        // The location of the selenium standalone server .jar file.
        seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.6.0.jar',
        // The port to start the selenium server on, or null if the server should
        // find its own unused port.
        seleniumPort: null,
        // Chromedriver location is used to help the selenium standalone server
        // find chromedriver. This will be passed to the selenium jar as
        // the system property webdriver.chrome.driver. If null, selenium will
        // attempt to find chromedriver using PATH.
        chromeDriver: 'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.30.exe',
        // Additional command line options to pass to selenium. For example,
        // if you need to change the browser timeout, use
        // seleniumArgs: ['-browserTimeout=60'],
        seleniumArgs: [],
        framework: 'jasmine2',
        // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
        // The tests will be run remotely using SauceLabs.
        sauceUser: null,
        sauceKey: null,
      //  localSeleniumStandaloneOpts: { jvmArgs: ['-Dwebdriver.ie.driver=C:/Users/manish.chopra/Workspace2/SampleProtractor/node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.6.0.exe', '-Dwebdriver.gecko.driver=C:/Users/manish.chopra/Workspace2/SampleProtractor/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.17.0.exe'] },
     //   restartBrowserBetweenTests: true,
        capabilities: {
            'browserName': 'firefox',
            'shardTestFiles': true,
          },
//        maxSessions : 1,
//        multiCapabilities : [
//            
//            {'browserName': 'chrome'},
//            
//            {
//                browserName : 'chrome',
//                mobile : true,
//                chromeOptions : {
//                    'mobileEmulation' : {
//                        'deviceName' : 'iPad'
//                    }
//                }
//            }
//            
//            ],
            
            'suites' : suites,
            rootElement: 'body',
            useAllAngular2AppRoots: true,
            
            
            
            onPrepare: function() {
                
                var timeStamp = d.getDate() + '-' + month[d.getMonth()] + '-' + d.getFullYear() + '-' + d.getHours() + 'h-' + d.getMinutes() + 'm';
                return browser.getProcessedConfig().then(function(config) {
                    
                    
                    var browserName = config.capabilities.browserName;
                    var language =  browser.params.langOption;
                    
                    return browser.getCapabilities().then(function(cap) {
                        if (cap.get('mobileEmulationEnabled') === true) {
                            
                            var deviceName =  config.capabilities.chromeOptions.mobileEmulation.deviceName;
                            
                            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                                savePath: './Reports/'+browserName+'_'+deviceName+'_'+timeStamp+'/',
                                screenshotsFolder: 'images',
                                cleanDestination: false,
                                takeScreenshots: true
                            }));
                            
                        }
                        else {
                            
                            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                                savePath: './Reports/'+browserName+'_'+timeStamp+'/',
                                screenshotsFolder: 'images',
                                cleanDestination: false,
                                takeScreenshots: true
                            }));
                        }
                        
                    });
                    
                });
                
            },
            
            
            // ----- Options to be passed to minijasminenode -----
            jasmineNodeOpts: {
                // onComplete will be called just before the driver quits.
                onComplete: null,
                // If true, display spec names.
                isVerbose: true,
                // If true, print colors to the terminal.
                showColors: true,
                // If true, include stack traces in failures.
                includeStackTrace: true,
                // Default time to wait in ms before a test fails.
                defaultTimeoutInterval: 6000000
            },
            
            
            params : {
                
                user : {
                    authentication : {
                        password: 'Xayode0001#',
                        
                    },
                }
            },
            
            
};