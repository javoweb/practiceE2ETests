Feature: Actualizar Post

  @user1 @web
  Scenario: Actualizar post utilizando más de 100 caracteres
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "r.orellana@uniandes.edu.co" into input field having id "ember8"
    And I enter "admin12345" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on link with text "pages"
    And I click on link with text "posts"
    And I click on first element of list "posts-list"
    And I write " ..texto agregado 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" on textarea with placeholder "Post Title"
    #And I click on Publish
    #And I click on Publish
   

  