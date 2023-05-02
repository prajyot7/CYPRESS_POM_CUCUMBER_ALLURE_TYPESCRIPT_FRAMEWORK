Feature: The Internet Guinea Pig Website

  Scenario Outline:Validate Login security

    Given user is on the login page
    When enter <username> and <password>
    Then validate flash message <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
  @smokeTest
  Scenario Outline:verify invalid login scenario

    Given user is on the login page
    When enter <username> and <password>
    Then validate flash message <message>

    Examples:
      | username | password | message                  |
      | tomsmith | barfoo!  | You password is invalid! |
