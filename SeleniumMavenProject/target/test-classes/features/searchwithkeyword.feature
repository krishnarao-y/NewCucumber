Feature: Open google.co.in website, search for any text and capture the no of results

  Scenario: Open an application
  	Given Open the google india application
  
  Scenario: Search for any text and get the results
    When Enter Selenium in google search text box
    Then Click on search button
    And Get the results text from the page
    Then Closes the google application

  Scenario: show facebook login page and close
    Given Open facebook application
    When verify facebook opened or not
    Then Closes the facebook application
