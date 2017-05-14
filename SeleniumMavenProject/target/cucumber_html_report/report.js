$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchwithkeyword.feature");
formatter.feature({
  "line": 1,
  "name": "Open google.co.in website, search for any text and capture the no of results",
  "description": "",
  "id": "open-google.co.in-website,-search-for-any-text-and-capture-the-no-of-results",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Open an application",
  "description": "",
  "id": "open-google.co.in-website,-search-for-any-text-and-capture-the-no-of-results;open-an-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open the google india application",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.openGoogle()"
});
formatter.result({
  "duration": 6936730094,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Search for any text and get the results",
  "description": "",
  "id": "open-google.co.in-website,-search-for-any-text-and-capture-the-no-of-results;search-for-any-text-and-get-the-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Enter Selenium in google search text box",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Get the results text from the page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Closes the google application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 6
    }
  ],
  "location": "GoogleSearch.search(String)"
});
formatter.result({
  "duration": 575796797,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.searchButton()"
});
formatter.result({
  "duration": 30139736936,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027btnG\u0027]\"}\nCommand duration or timeout: 30.13 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027KrishnaRao-PC\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f84a88d6-f8dc-4fe1-809d-e8cc62590b72\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027btnG\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat com.google.pages.GoogleHome.searchButton(GoogleHome.java:30)\r\n\tat com.cucumber.tests.GoogleSearch.searchButton(GoogleSearch.java:20)\r\n\tat ✽.Then Click on search button(searchwithkeyword.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027btnG\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027KrishnaRao-PC\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/KRISHN~1/AppData/Local/Temp/anonymous8390870460028844072webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10723)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/KRISHN~1/AppData/Local/Temp/anonymous8390870460028844072webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:623)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleSearch.getRes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleSearch.closeApp()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "show facebook login page and close",
  "description": "",
  "id": "open-google.co.in-website,-search-for-any-text-and-capture-the-no-of-results;show-facebook-login-page-and-close",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Open facebook application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "verify facebook opened or not",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Closes the facebook application",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook.openGoogle()"
});
formatter.result({
  "duration": 4020950277,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.search()"
});
formatter.result({
  "duration": 78979192,
  "status": "passed"
});
formatter.match({
  "location": "Facebook.closeApp()"
});
formatter.result({
  "duration": 1968856818,
  "status": "passed"
});
});