Feature: XPeng Configurator - Page Load & Display Tests
  As a user
  I want the configurator page to load properly
  So that I can view available vehicle models and their information

  Background:
    Given I navigate to the XPeng configurator page
    And I dismiss the privacy popup if it appears

  Scenario: Initial page loads successfully
    When the page finishes loading
    Then the page title should be "Configurator"
    And the main heading "Wybierz model" should be visible

  Scenario: All vehicle models display with correct information
    When the page finishes loading
    Then I should see XPENG G6 model displayed
    And the price 194,900 PLN should be displayed for G6
    And I should see XPENG G9 model displayed
    And the price 252,900 PLN should be displayed for G9
    And I should see XPENG P7+ model displayed
    And the price 197,900 PLN should be displayed for P7+

  Scenario: Price display format validation in Polish format
    When the page finishes loading
    Then all prices should be displayed in format: XXX XXX PLN
    And price for G6 should match pattern 194 900 PLN
    And price for G9 should match pattern 252 900 PLN
    And price for P7+ should match pattern 197 900 PLN

  Scenario: Configure buttons display for each model
    When the page finishes loading
    Then at least 3 "KONFIGURUJ" buttons should be visible
    And all visible buttons should be enabled

  Scenario: Configure button for G6 navigates correctly
    When the page finishes loading
    And I click the first KONFIGURUJ button for G6
    Then the page should navigate to a configure page
    And the URL should contain "configure"

  Scenario: Configure button for G9 navigates correctly
    When the page finishes loading
    And I click the second KONFIGURUJ button for G9
    Then the page should navigate to a configure page
    And the URL should contain "configure"

  Scenario: Configure button for P7+ navigates correctly
    When the page finishes loading
    And I click the third KONFIGURUJ button for P7+
    Then the page should navigate to a configure page
    And the URL should contain "configure"
