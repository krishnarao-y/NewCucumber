package com.cucumber.tests;

import java.util.concurrent.TimeUnit;
import org.testng.Assert;
import com.cucumber.core.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Facebook extends DriverFactory{
	  
	  @Given("^Open facebook application$")
	  public void openGoogle() {
		  driver.get("http://www.facebook.com");
		  driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	  }
	  
	  @When("^verify facebook opened or not")
	  public void search(){
		  if (driver.getTitle().equals("Facebook - Log In or Sign Up")){
			 Assert.assertEquals("Facebook - Log In or Sign Up", driver.getTitle());
		  }else{
			 Assert.fail("This is not a facebook application"); 
		  }
	  }
	  
	  @Then("^Closes the facebook application$")
	  public void closeApp(){
		  driver.close();
		  driver.quit();
	  }
}
