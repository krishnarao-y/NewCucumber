package com.cucumber.tests;

import com.cucumber.core.DriverFactory;
import com.google.pages.GoogleHome;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class GoogleSearch extends DriverFactory {
	  
	  @When("^Enter (.*) in google search text box$")
	  public void search(String keyword){
		  new GoogleHome(driver).searchBox(keyword);
	  }
	  
	  @Then("^Click on search button$")
	  public void searchButton(){
		  new GoogleHome(driver).searchButton();
	  }
	  
	  @And("^Get the results text from the page$")
	  public void getRes(){
		  new GoogleHome(driver).getResults();
	  }
	  
	  @Then("^Closes the google application$")
	  public void closeApp(){
		  driver.close();
		  driver.quit();
	  }

}
