package com.google.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GoogleHome {
	WebDriver driver;
	
	@FindBy(xpath="//input[@name='q']")
	private WebElement txtboxSearch;
	
	@FindBy(xpath="//input[@name='btnG']")
	private WebElement btnSearch;
	
	@FindBy(xpath="//input[@name='resultStats']")
	private WebElement txtResult;
	
	public GoogleHome(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void searchBox(String keyword){
		txtboxSearch.sendKeys(keyword);
	}
	
	public void searchButton(){
		btnSearch.click();
	}
	
	public void getResults(){
		String res = txtResult.getText();
		System.out.println(res);
	}

}
