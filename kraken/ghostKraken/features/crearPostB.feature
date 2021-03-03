Feature: Crear Post

  @user1 @web
  Scenario: Crear post utilizando más de 100 caracteres
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "r.orellana@uniandes.edu.co" into input field having id "ember8"
    And I enter "admin12345" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on link with text "pages"
    And I click on link with text "posts"
    And I click on link with text "editor"
    And I write "abccdfsgsgsgshhhabccdfsgsgsgshhhabccdfsgsgsgshhhabccdfsgsgsgshhhabccdfsgsgsgshhhabccdfsgsgsgshhhabccdfsgsgsgshhh" on textarea with placeholder "Post Title"
    And I click on Publish
    And I click on Publish
    


  
    


   

  