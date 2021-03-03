Feature: Log In

  @user1 @web
  Scenario: Loguerse en el sistema con user inexistente
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "no_existe@uniandes.edu.co" into input field having id "ember8"
    And I enter "admin12345" into input field having id "ember10"
    And I click on element having id "ember12"
    Then I should see text "Your password is incorrect."
    

  @user2 @web
  Scenario: Loguerse en el sistema con user existente
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "r.orellana@uniandes.edu.co" into input field having id "ember8"
    And I enter "admin12345" into input field having id "ember10"
    And I click on element having id "ember12"
    Then I should see text "View Site"
    
   

  