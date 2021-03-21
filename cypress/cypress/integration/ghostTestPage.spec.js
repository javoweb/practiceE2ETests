var faker = require('faker')

const credentials = require('../fixtures/credentials.json')
const parameters = require('../fixtures/parameters.json')

var validTitleLens = [
    parameters.pageTitle.maxLength, 
    parameters.pageTitle.maxLength - 1, 
    parameters.pageTitle.maxLength - 2, 
    parameters.pageTitle.maxLength - 10, 
    1, 
    2, 
    3,
    10,
    20,
    20,
    40
]
var invalidTitleLens = [
    parameters.pageTitle.maxLength + 1, 
    parameters.pageTitle.maxLength + 2, 
    parameters.pageTitle.maxLength + 10,
    parameters.pageTitle.maxLength + 20,
    parameters.pageTitle.maxLength + 30,
    parameters.pageTitle.maxLength + 40

]

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Ghost', () => {
    beforeEach(() => {
        cy.visitLoginPage()
        cy.fillLogin(credentials.email, credentials.password).click()
        cy.wait(1000)
        cy.goToPagesPage()
    })

    context('Admin Real Page Tests', () => {
        context('Create Page', () => {
            beforeEach(() => {
                cy.clickOnNewPage()
                cy.typeTitle(faker.lorem.word())
                cy.wait(500)
                cy.focusOnContents()
            })
           
            validTitleLens.forEach(len => {
                it(`Create valid page with title of length ${len}`, () => {
                    let title = faker.lorem.words(len)
                    title = (title.length > len) ? title.substring(0, len) : title
                    cy.goToPagesPage()
                    cy.clickOnFirstPage()
                    cy.typeContents(faker.lorem.sentence())
                    cy.typeTitle(title)
                    cy.clickOnPublish()
                    cy.getNotification().then(($title) => {
                        expect($title.get(0).innerText).to.include('Published')
                    })
                })
            })

            
            invalidTitleLens.forEach(len => {
                it(`Create invalid page with title of length ${len}`, () => {
                    let title = faker.lorem.words(len)
                    title = (title.length > len) ? title.substring(0, len) : title
                    cy.goToPagesPage()
                    cy.clickOnFirstPage()
                    cy.typeContents(faker.lorem.sentence())
                    cy.typeTitle(title)
                    cy.clickOnPublish()
                    cy.getAlert().then(($title) => {
                        expect($title.get(0).innerText).to.include('Saving failed')
                    })
                })
            })
             
        })



        context('Edit Page', () => {
            beforeEach(() => {
                cy.clickOnFirstPublishedPage()
            })
            
            
            validTitleLens.forEach(len => {
                it(`Edit Valid Page with title of length ${len}`, () => {
                    let title = faker.lorem.words(len)
                    title = (title.length > len) ? title.substring(0, len) : title
                    cy.typeTitle(title)
                    cy.typeContents(faker.lorem.sentence())
                    cy.clickOnPublish()
                    cy.getNotification().then(($title) => {
                        expect($title.get(0).innerText).to.include('Updated')
                    })
                })
            })
            
            invalidTitleLens.forEach(len => {
                it(`Edit Invalid Page with title of length ${len}`, () => {
                    let title = faker.lorem.words(len)
                    title = (title.length > len) ? title.substring(0, len) : title
                    cy.typeTitle(title)
                    cy.typeContents(faker.lorem.sentence())
                    cy.clickOnPublish()
                    cy.getAlert().then(($title) => {
                        expect($title.get(0).innerText).to.include('Update failed')
                    })
                })
            })
            
            
        })
        
    })
    
})
