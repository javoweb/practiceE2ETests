Feature: Crear Pagina

  @user1 @web
  Scenario: Crear página utilizando menos de 255 caracteres en el titulo y cancelar
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button page
    And I click on button new page
    And I write "abccdfsgsgsgshhh" on textarea with placeholder "Page Title"
    And I click dummy on post
    And I click on first button publish
    And I click on button cancel near button publish

    


  
    


   

  