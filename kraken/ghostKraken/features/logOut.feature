Feature: Log Out

  @user1 @web
  Scenario: Desloguearse del sistema
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "r.orellana@uniandes.edu.co" into input field having id "ember8"
    And I enter "admin12345" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on Logout
    And I click on link with text "signout"
    

  
    
   

  