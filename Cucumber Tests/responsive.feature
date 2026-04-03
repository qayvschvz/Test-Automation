Feature: XPeng Configurator - Responsive Design Tests
  As a user
  I want the configurator to work on different screen sizes
  So that I can use it on desktop, tablet, or mobile devices

  Scenario: Desktop view (1920x1080) displays correctly
    Given I set my viewport to 1920x1080 (desktop)
    When I navigate to the XPeng configurator page
    And I dismiss the privacy popup if it appears
    Then all vehicle models should be visible without scrolling
    And the content should not require excessive horizontal scrolling
    And the page should display properly without layout issues

  Scenario: Tablet view (768x1024) adapts layout
    Given I set my viewport to 768x1024 (tablet)
    And I enable mobile user agent for tablet
    When I navigate to the XPeng configurator page
    And I dismiss the privacy popup if it appears
    Then all vehicle models should be visible
    And all interactive buttons should be large enough to tap (minimum 40x40 pixels)
    And the layout should adapt to tablet screen size

  Scenario: Mobile view (375x667) single column layout
    Given I set my viewport to 375x667 (mobile)
    And I set mobile user agent to iPhone
    When I navigate to the XPeng configurator page
    And I dismiss the privacy popup if it appears
    Then the page should not require horizontal scrolling
    And the content should be in a single column layout
    And text and elements should be readable on mobile screen
    And all vehicle models should be visible
