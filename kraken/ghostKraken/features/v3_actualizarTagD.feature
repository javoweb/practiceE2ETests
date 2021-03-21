Feature: Actualizar Tag

  @user1 @web
  Scenario: Actualizar tag utilizando menos de 191 caracteres en el Name, modificar y reintentar guardar
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button tag
    And I click on first tag
    And I enter " Name Tag text" into input field having id "tag-name"
    And I click on button save in new tag
    And I enter " Name Tag text" into input field having id "tag-name"
    And I click on button save in new tag
  
    


   

  