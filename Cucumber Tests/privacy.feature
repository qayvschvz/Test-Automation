Feature: XPeng Configurator - Privacy & Cookie Consent Tests
  As a website user
  I want to manage my privacy and cookie preferences
  So that I can control what data is collected about me

  Scenario: Privacy popup displays on initial visit
    Given I open a fresh browser session with no cookies
    When I navigate to the XPeng configurator page
    And I wait for the privacy popup to appear
    Then the privacy settings popup should be displayed

  Scenario: Accept all cookies closes popup
    Given I open a fresh browser session with no cookies
    When I navigate to the XPeng configurator page
    And I click the "Zaakceptuj wszystko" (Accept All) button
    Then the privacy popup should close
    And the main heading "Wybierz model" should be visible
    And the page should be fully accessible

  Scenario: Decline cookies closes popup appropriately
    Given I open a fresh browser session with no cookies
    When I navigate to the XPeng configurator page
    And I click the "Odmów" (Decline) button
    Then the privacy popup should close
    And the page should remain functional
    And the main heading "Wybierz model" should be visible

  Scenario: Save privacy settings works
    Given I open a fresh browser session with no cookies
    When I navigate to the XPeng configurator page
    And I click the "Zapisz ustawienia" (Save Settings) button
    Then the privacy popup should close
    And the privacy settings should be saved
