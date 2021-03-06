Feature: Invitar a Usuario

  @user1 @web
  Scenario: Enviar a usuario con email existente
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button staff
    And I click on button invite people
    And I enter "<user>" into input field having id "new-user-email"
    And I click on button send invitation now
    Then I should see text "A user with that email address already exists."
    
   

   

  