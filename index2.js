/*
    LambdaTest selenium automation sample example
    Configuration
    ----------
    username: Username can be found at automation dashboard
    accessKey:  AccessKey can be generated from automation dashboard or profile section
 
    Result
    -------
    Execute NodeJS Automation Tests on LambdaTest Distributed Selenium Grid
*/
const webdriver = require('selenium-webdriver');
 

function searchTextOnGoogle() {
    // Setup Input capabilities
    
 
    // URL: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
    //const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
 
    // setup and build selenium driver object
    const driver = new webdriver.Builder().forBrowser('chrome').build();
 
    // navigate to a url, search for a text and get title of page
    driver.get('https://www.google.com/ncr').then(function() {
        driver.findElement(webdriver.By.name('q')).sendKeys('LambdaTest\n').then(function() {
            driver.getTitle().then(function(title) {
                setTimeout(function() {
                    console.log(title);
                    driver.quit();
                }, 5000);
            });
        });
    });
}
searchTextOnGoogle();