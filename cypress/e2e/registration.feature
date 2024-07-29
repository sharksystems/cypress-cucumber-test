Feature: User Registration

  Scenario: User registration using valid data
    Given the user is on the home page
    When the user clicks on the "Sign up" button
    And the user registers with a random username, email, and password
    Then the user should be logged in

  Scenario: User registration using existing data
    Given the user has an existing account
    When the user clicks on the "Sign up" button
    And the user attempts to register using existing data
    Then the error message informing the email is taken is displayed
