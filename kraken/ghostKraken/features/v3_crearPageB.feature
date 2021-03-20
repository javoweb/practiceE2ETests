Feature: Crear Pagina

  @user1 @web
  Scenario: Crear página utilizando más de 255 caracteres en el titulo
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button page
    And I click on button new page
    And I write "aaattttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt" on textarea with placeholder "Page Title"
    And I click dummy on post
    Then I should see first button publish

    


  
    


   

  