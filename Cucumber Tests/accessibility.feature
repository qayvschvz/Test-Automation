Feature: XPeng Configurator - Accessibility Tests
  As a user with accessibility needs
  I want to navigate and interact with the page using keyboard only
  So that I can use the website without a mouse

  Background:
    Given I navigate to the XPeng configurator page
    And I dismiss the privacy popup if it appears

  Scenario: Keyboard navigation works
    When I press the Tab key
    Then an interactive element should receive focus
    And the focused element should be visible

  Scenario: Enter key activates buttons
    When I navigate through interactive elements using Tab key
    And I find a clickable button or link
    And I press the Enter key
    Then the button should be activated
    And the associated action should be triggered

  Scenario: Page has proper heading hierarchy
    When the page finishes loading
    Then the page should contain heading elements
    And the heading hierarchy should be semantically correct
    And there should be h1, h2, or h3 elements defined

  Scenario: Text has sufficient color contrast
    When the page finishes loading
    Then all text elements should have readable color contrast
    And button text should be distinguishable from background
    And link text should be distinguishable from background

  Scenario: Links are properly identified
    When the page finishes loading
    Then all links should be identified with proper text or aria-label
    And links should be distinguishable from regular text
    And links should be keyboard accessible
