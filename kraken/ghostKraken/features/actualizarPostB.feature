Feature: Actualizar Post

  @user1 @web
  Scenario: Actualizar post utilizando más de 100 caracteres
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button post
    And I click on first post
    And I write "..texto agregado weedfdffdfdfdweedfdffdfdfdweedfdffdfdfdweedfdffdfdfdweedfdffdfdfdweedfdffdfdfdweedfdffdfdfdweedfdffdfdfd" on element with class "gh-main"
    And I click on first button update
    And I click on second button update
   

  