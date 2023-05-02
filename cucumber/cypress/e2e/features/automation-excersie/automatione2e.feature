Feature: Automation excersie e2e test flow

    Scenario Outline:Register User
        Given navigate to website
        When clickon signuporlogin button
        Then verify <signuptab> tab is visible
        When fill <name> and <email> and click on submit button
        Then verify account information tab <message>
        When enter all mandate fields
        Then verify account Creation tab <acc>
        Then verify loggin <user> name
        Then verify account Delete Account tab <dcc>

        Examples:
            | signuptab        | name    | email                         | message                   | acc              | dcc              | user    |
            | New User Signup! | prajyot | prajyot.fulsundar14@gmail.com | Enter Account Information | Account Created! | Account Deleted! | prajyot |


    Scenario Outline:Login User with correct email and password
        Given navigate to website
        When clickon signuporlogin button
        Then verify <signuptab> tab is visible
        When fill <name> and <email> and click on submit button
        Then verify account information tab <message>
        When enter all mandate fields
        Then verify account Creation tab <acc>
        Then verify loggin <user> name
        Then logout user
        When login using valid credentials


        Examples:
            | signuptab        | name    | email                         | message                   | acc              | dcc              | user    | loginTab              |
            | New User Signup! | prajyot | prajyot.fulsundar14@gmail.com | Enter Account Information | Account Created! | Account Deleted! | prajyot | Login to your account |

    Scenario Outline:Login User with incorrect email and password
        Given navigate to website
        When clickon signuporlogin button
        Then verify login to account tab <loginTab>
        When fill incorrect <email> and <password> and click on login button
        Then verify error message is <message>

        Examples:
            | loginTab              | email                         | password | message                              |
            | Login to your account | prajyot.fulsundar14@gmail.com | prajyot  | Your email or password is incorrect! |

    Scenario Outline:Verify Logout test case
        Given navigate to website
        When clickon signuporlogin button
        Then verify login to account tab <loginTab>
        When fill <email> and <password> click login
        Then verify loggin <user> name
        Then logout user
        Then verify login to account tab <loginTab>

        Examples:
            | loginTab              | email                         | password    | user    |
            | Login to your account | prajyot.fulsundar14@gmail.com | welcome123! | prajyot |

    Scenario Outline:Register User with existing email
        Given navigate to website
        When clickon signuporlogin button
        Then verify <signuptab> tab is visible
        When fill <name> and <email> and click on submit button
        Then verify error message is <message>
        Examples:
            | signuptab        | name    | email                         | message                      |
            | New User Signup! | prajyot | prajyot.fulsundar14@gmail.com | Email Address already exist! |

    Scenario Outline:Delete Account
        Given navigate to website
        When clickon signuporlogin button
        Then verify login to account tab <loginTab>
        When fill <email> and <password> click login
        Then verify loggin <user> name
        Then verify account Delete Account tab <dcc>
        Examples:
            | loginTab              | email                         | password    | user    | dcc              |
            | Login to your account | prajyot.fulsundar14@gmail.com | welcome123! | prajyot | Account Deleted! |

    @smokeTest
    Scenario Outline:Contact Us Form
        Given navigate to website
        When click on <contactus> button
        Then verify contact us tab <contactTab>
        When enter all contactus fields
        # Then verify alert and click on ok button
        Then verify <success> message
        Then click Home button and verify that landed to home page successfully

        Examples:
            | contactus  | contactTab   | success                                                 |
            | contact_us | Get In Touch | Success! Your details have been submitted successfully. |

    @smokeTest
    Scenario Outline:Verify Test Cases Page
        Given navigate to website
        When clickon signuporlogin button
        Then verify <signuptab> tab is visible
        When click on testcase link
        Then verify testcase tab 
        Then verify test case page load successfully
        Examples:
            | signuptab        |
            | New User Signup! |

    @smokeTest
    Scenario Outline:Verify All Products and product detail page
        Given navigate to website
        When clickon signuporlogin button
        Then verify <signuptab> tab is visible
        When click on testcase link
        Then verify testcase tab 
        Then verify test case page load successfully
        Examples:
            | signuptab        |
            | New User Signup! |