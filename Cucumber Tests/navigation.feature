Feature: XPeng Configurator - Navigation Tests
  As a user
  I want to navigate through different sections of the website
  So that I can find information about models, company, and contact details

  Background:
    Given I navigate to the XPeng configurator page
    And I dismiss the privacy popup if it appears

  Scenario: Footer navigation sections are visible
    When I scroll to the footer
    Then I should see the "Modele" section
    And I should see the "O nas" section
    And I should see the "Do pobrania" section
    And I should see the "Kontakt" section

  Scenario: Models navigation links function correctly
    When I scroll to the footer
    And I click on model link "G6"
    Then the page should navigate to the G6 model page
    And the URL should contain "/pl/model/xpeng/g6/"
    
    When I navigate back to the configurator page
    And I click on model link "G9"
    Then the page should navigate to the G9 model page
    And the URL should contain "/pl/model/xpeng/g9/"
    
    When I navigate back to the configurator page
    And I click on model link "P7"
    Then the page should navigate to the P7 model page
    And the URL should contain "/pl/model/xpeng/p7/"

  Scenario: About Us links function correctly
    When I scroll to the footer
    And I click on the "O marce" link
    Then the page should navigate to the about page
    And the URL should contain "o-marce"

  Scenario: Downloads section provides access to resources
    When I scroll to the footer
    Then the "Cennik" price list link should be enabled
    And the "Instrukcje obslugi" manuals link should be enabled

  Scenario: Contact links function correctly
    When I scroll to the footer
    Then the "Skontaktuj" contact link should be visible
    And the "Skontaktuj" contact link should be enabled
    And the dealer link should be visible
    And the dealer link should be enabled
