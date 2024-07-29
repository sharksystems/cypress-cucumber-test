Feature: Post Management

  Scenario: Liking a post on the main page
    Given the user is signed up
    When the user clicks on the "Global Feed" tab
    And the user likes a post titled "<title>"
    Then the like count on the post titled "<title>" should increase
    Examples:
      | title                                                                         |
      | Ill quantify the redundant TCP bus, that should hard drive the ADP bandwidth! |

  Scenario: Liking a post without logging in
    Given the user is on the home page
    When the user clicks like on a post titled "<title>"
    Then the user is transferred to the Registration page
    Examples:
      | title                                                                         |
      | Ill quantify the redundant TCP bus, that should hard drive the ADP bandwidth! |

  Scenario: Removing a favorited article on the profile page
    Given the user is logged in
    When the user clicks on the "Global Feed" tab
    And the user likes a post titled "<title>"
    And the user navigates to their profile
    And the user removes the liked post titled "<title>"
    Then the post should be removed from favorites
    Examples:
      | title                                                                                  |
      | quantifying the circuit wont do anything, we need to parse the back-end FTP interface! |

  Scenario: Creating a post
    Given the user is on the home page
    And the user is signed up as Post user
    When the user creates a post with random data
    Then the post should be created with the provided data

  Scenario: Editing a post
    Given the user is on the home page
    And the user is signed in as Post user
    When the user creates a post with random data
    And the user edits the post with new data
    Then the post should be updated with the new data

  Scenario: Deleting a post from the profile page
    Given the user is logged in
    And the user creates a post with random data
    When the user deletes the post
    Then the post should be removed from the profile

  Scenario: Following an author via the Profile page
    Given the user is on the home page
    And the user is signed up as Follow user
    When the user clicks on the "Global Feed" tab
    And the user clicks on an author named "<author>" on any post
    And the user clicks on the "Follow author" button
    And the user navigates to the Home page
    Then the posts by the author named "<author>" should be displayed in the "Your Feed" tab
    Examples:
      | author         |
      | Maksim Esteban |

  Scenario: Unfollowing an author via the Full Post page
    Given the user is logged in
    And the user clicks on the "Global Feed" tab
    When the user clicks on an author named "<author>" on any post
    And the user clicks on the "Follow author" button
    And the user navigates to the Home page
    And the user clicks on any post from the author named "<author>"
    And the user clicks on the "Follow author" button
    And the user navigates to the Home page
    Then the posts should be removed from the "Your Feed" tab
    Examples:
      | author         |
      | Maksim Esteban |

  Scenario: Following an author without logging in
    Given the user is on the home page
    When the user clicks on the "Global Feed" tab
    And the user clicks on an author named "<author>" on any post
    And the user clicks on the "Follow author" button
    Then the user is transferred to the Registration page
    Examples:
      | author         |
      | Maksim Esteban |