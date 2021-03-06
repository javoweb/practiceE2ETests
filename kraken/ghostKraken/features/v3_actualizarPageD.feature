Feature: Actualizar Pagina

  @user1 @web
  Scenario: Actualizar pagina utilizando menos de 255 caracteres en el titulo y programar para el futuro
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button page
    And I click on first page
    And I write "..texto agregado" on element with class "gh-main"
    And I click dummy on post
    And I click on first button publish
    And I click on option schedule
    And I click on second button publish
   

  