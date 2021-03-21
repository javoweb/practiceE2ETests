describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('http://54.88.99.50');
        cy.wait(1000);
        randomEvent(20);
    })
})

function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}


function myRandomClick() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
        }
        cy.wait(1000);
        
    });        
}

function myButtonClick() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
   
    cy.get('button').then($btns => {
        //alert($btns.length)
        var randomButton = $btns.get(getRandomInt(0, $btns.length));
        if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({force: true});
        }
        cy.wait(1000);
        
    });
     
}

function myInputText() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
   

  

        cy.get('input').then($inputs => {
            var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
            if(!Cypress.dom.isHidden(randomInput)) {
                cy.get(randomInput).type("Random text",{ force: true });
            }
            cy.wait(1000);        
        });
    
    
     
}


function mySelect() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
   
    cy.get('select').then($selects => {
        var randomSelect = $selects.get(getRandomInt(0, $selects.length));
        if(!Cypress.dom.isHidden(randomSelect)) {

            cy.get(randomSelect).find('option').as('options');
            cy.get('@options').first().click({force: true});
        }
        cy.wait(1000);
        
    });
     
}


function randomEvent(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {

        var nroEvento =  getRandomInt(1,2);
        
        //nroEvento = 4;
        switch (nroEvento) {
            case 1:
                myRandomClick();
                break;
            
            case 2:
                myButtonClick();
                break;

            case 3:
                myInputText();
                break;

            case 4:
                mySelect();
                break;
        }
        

        monkeysLeft = monkeysLeft - 1;
        randomEvent(monkeysLeft);

    }   
    
}