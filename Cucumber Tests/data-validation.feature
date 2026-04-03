Feature: XPeng Configurator - Data Validation Tests
  As a user
  I want accurate pricing and model information
  So that I can make informed decisions about vehicle purchases

  Background:
    Given I navigate to the XPeng configurator page
    And I dismiss the privacy popup if it appears

  Scenario: Price accuracy validation
    When the page finishes loading
    Then the XPENG G6 price should be displayed as 194,900 PLN
    And the XPENG G9 price should be displayed as 252,900 PLN
    And the XPENG P7+ price should be displayed as 197,900 PLN

  Scenario: Model information accuracy
    When the page finishes loading
    Then XPENG G6 model should be displayed
    And XPENG G9 model should be displayed
    And XPENG P7+ model should be displayed
    And each model should have associated information

  Scenario: Currency consistency
    When the page finishes loading
    Then all prices should be displayed in Polish Zloty (PLN)
    And the currency symbol should be consistent across all prices
    And there should be no mixed currency symbols

  Scenario: No duplicate models
    When the page finishes loading
    Then XPENG G6 should appear maximum 10 times on the page
    And XPENG G9 should appear maximum 10 times on the page
    And XPENG P7+ should appear maximum 10 times on the page
    And there should be no excessive duplicate entries in the main content
