package com.cucumber.core;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;

public class DriverFactory {
	
	protected static WebDriver driver;
	
	@Parameters("browserName")
	@BeforeTest()
	public WebDriver getDriver(String browser){
		if (browser.equals("firefox")){
			driver = new FirefoxDriver();
		}
		return driver;
	}	

}