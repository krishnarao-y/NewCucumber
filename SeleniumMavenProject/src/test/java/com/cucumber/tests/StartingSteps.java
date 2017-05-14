package com.cucumber.tests;

import java.util.concurrent.TimeUnit;

import com.cucumber.core.DriverFactory;

import cucumber.api.java.en.Given;

public class StartingSteps extends DriverFactory{ //make it as environment class

	@Given("^Open the google india application$")
	  public void openGoogle() {
		  driver.get("http://www.google.co.in");
		  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	  }
	
}
