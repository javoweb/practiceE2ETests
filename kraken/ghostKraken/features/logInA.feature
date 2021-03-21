Feature: Log In

  @user1 @web
  Scenario: Loguerse en el sistema con user inexistente
    Given I navigate to page "<url>"
    When I enter "<userFail>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    Then I should see text "Your password is incorrect."
   

  