Feature: User Login

  Scenario: Login using valid data
    Given the user has an existing account
    When the user clicks on the "Sign in" button
    And the user logs in with their email and password
    Then the user should be logged in

  Scenario: Login using invalid email
    Given the user is on the home page
    When the user clicks on the "Sign in" button
    And the user attempts to log in with an invalid email
    Then an error message should be displayed

  Scenario: Login using invalid password
    Given the user is on the home page
    When the user clicks on the "Sign in" button
    And the user attempts to log in with an invalid password
    Then an error message should be displayed

  Scenario: Logging out
    Given the user is logged in
    When the user navigates to settings
    And the user logs out
    Then the sign-in button should be visible