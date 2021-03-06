Feature: Invitar a Usuario

  @user1 @web
  Scenario: Enviar a usuario con email no válido
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button staff
    And I click on button invite people
    And I write email unique and invalid on email adress
    And I click on button send invitation now
    Then I should see text "Invalid Email."
    
   

   

  