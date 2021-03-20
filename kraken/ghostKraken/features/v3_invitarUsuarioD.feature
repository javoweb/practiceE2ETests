Feature: Invitar a Usuario

  @user1 @web
  Scenario: Enviar a usuario con email valido y cancelar la acción
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button staff
    And I click on button invite people
    And I write email unique and valid on email adress
    And I click on button to cancel invitation
    
    
   

   

  