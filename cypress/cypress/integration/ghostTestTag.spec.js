var faker = require('faker')

const credentials = require('../fixtures/credentials.json')
const parameters = require('../fixtures/parameters.json')
const loginCases = require('../fixtures/loginCases.json')

var validNameLens = [
    parameters.tagName.maxLength, 
    parameters.tagName.maxLength - 1, 
    parameters.tagName.maxLength - 2, 
    parameters.tagName.maxLength - 10, 
    1, 
    2, 
    3
]
var invalidNameLens = [
    parameters.tagName.maxLength + 1, 
    parameters.tagName.maxLength + 2, 
    parameters.tagName.maxLength + 10
]

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Ghost', () => {
    beforeEach(() => {
        cy.visitLoginPage()
    })

    context('Admin Tag Tests', () => {
        beforeEach(() => {
            cy.fillLogin(credentials.email, credentials.password).click()
            cy.wait(1000)
        })
        
        
        context('Create Tag', () => {
           
            
            validNameLens.forEach(len => {
                it(`Create valid tag with title of length ${len}`, () => {
                    let name = faker.lorem.words(len)
                    name = (name.length > len) ? name.substring(0, len) : name
                    cy.goToPagesPage()//dmmy
                    cy.goToTagsPage()
                    cy.goToNewTag()
                    cy.typeNameTag(name)
                    cy.clickOnSaveTag() 
                    cy.getAlertButtonSaveTag().then(($title) => {
                        expect($title.get(0).innerText).to.include('Save')
                    })
                })
            })
            
            invalidNameLens.forEach(len => {
                it(`Create invalid tag with title of length ${len}`, () => {
                    let name = faker.lorem.words(len)
                    name = (name.length > len) ? name.substring(0, len) : name
                    cy.goToPagesPage()//dmmy
                    cy.goToTagsPage()
                    cy.goToNewTag()
                    cy.typeNameTag(name)
                    cy.clickOnSaveTag() 
                    cy.getAlertButtonSaveTag().then(($title) => {
                        expect($title.get(0).innerText).to.include('Retry')
                    })
                })
            })
            
             
        })


        /*
        context('Edit Page', () => {
            beforeEach(() => {
                cy.goToPagesPage()
                cy.clickOnFirstPage()
            })
            
            
            validNameLens.forEach(len => {
                it(`Edit Valid Page with title of length ${len}`, () => {
                    let title = faker.lorem.words(len)
                    title = (title.length > len) ? title.substring(0, len) : title
                    cy.typeTitle(title)
                    cy.typeContents(faker.lorem.sentence())
                    cy.clickOnPublish()
                    cy.getNotification().then(($title) => {
                        expect($title.get(0).innerText).to.include('Published')
                    })
                })
            })
            
            invalidNameLens.forEach(len => {
                it(`Edit Invalid Page with title of length ${len}`, () => {
                    let title = faker.lorem.words(len)
                    title = (title.length > len) ? title.substring(0, len) : title
                    cy.typeTitle(title)
                    cy.typeContents(faker.lorem.sentence())
                    cy.clickOnPublish()
                    cy.getAlert().then(($title) => {
                        expect($title.get(0).innerText).to.include('Saving failed')
                    })
                })
            })
            
            
        })
        */
        
    })
    
})


