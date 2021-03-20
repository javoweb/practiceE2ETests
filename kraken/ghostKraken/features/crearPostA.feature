Feature: Crear Post

  @user1 @web
  Scenario: Crear post utilizando menos de 100 caracteres
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button post
    And I click on link with text "editor"
    And I write "abccdfsgsgsgshhh" on textarea with placeholder "Post Title"
    And I click dummy on post
    And I click on first button publish
    And I click on second button publish

    


  
    


   

  