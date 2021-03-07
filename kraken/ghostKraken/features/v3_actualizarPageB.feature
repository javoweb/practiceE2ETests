Feature: Actualizar Pagina

  @user1 @web
  Scenario: Actualizar pagina utilizando mas de 255 caracteres
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button page
    And I click on first page
    And I write "..texto agregadooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" on element with class "gh-main"
    And I click on first button update
    And I click on second button update
   

  