Feature: Log Out

  @user1 @web
  Scenario: Desloguearse del sistema
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on element with class "gh-user-name"
    And I click on link with text "signout"
    

  
    
   

  