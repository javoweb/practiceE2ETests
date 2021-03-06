Feature: Crear Post

  @user1 @web
  Scenario: Crear post utilizando más de 255 caracteres
    Given I navigate to page "<url>"
    When I enter "<user>" into input field having id "ember8"
    And I enter "<password>" into input field having id "ember10"
    And I click on element having id "ember12"
    And I click on button post
    And I click on link with text "editor"
    And I write "asaaddddddddddddddddddddfdfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddasaaddddddddddddddddddddfdfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddasaaddddddddddddddddddddfdfdfdggggdfffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddd" on textarea with placeholder "Post Title"
    And I click dummy on post
    Then I should see first button publish
    


  
    


   

  