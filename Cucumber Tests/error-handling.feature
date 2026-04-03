Feature: XPeng Configurator - Error Handling & Edge Cases
  As a user
  I want the website to handle edge cases gracefully
  So that unexpected user actions don't break the application

  Background:
    Given I navigate to the XPeng configurator page
    And I dismiss the privacy popup if it appears

  Scenario: Browser back button works correctly
    When I click a KONFIGURUJ (Configure) button
    And the page navigates to a different URL
    And I press the browser back button
    Then the page should return to the previous state
    And the page should remain functional

  Scenario: Multiple rapid clicks handled gracefully
    When I rapidly click a KONFIGURUJ (Configure) button multiple times
    Then the page should handle the clicks without crashing
    And the page should remain functional
    And no JavaScript errors should occur

  Scenario: Page refresh during configuration
    When I click a KONFIGURUJ (Configure) button
    And the page starts navigating
    And I refresh the page
    Then the page should reload successfully
    And the page should be accessible after refresh
    And no persistent errors should occur

  Scenario: Footer links don't cause navigation errors
    When I scroll to the footer section
    And I click on footer links
    Then each link should be clickable without errors
    And the page should remain stable after clicking links
    And the browser should handle navigation gracefully
    And no console errors should appear
