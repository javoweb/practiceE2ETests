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
    3,
    10,
    20,
    20,
    40
]
var invalidNameLens = [
    parameters.tagName.maxLength + 1, 
    parameters.tagName.maxLength + 2, 
    parameters.tagName.maxLength + 10,
    parameters.tagName.maxLength + 20,
    parameters.tagName.maxLength + 30,
    parameters.tagName.maxLength + 40
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
            cy.goToPagesPage()//dmmy
            cy.goToTagsPage()
        })
        
        
        context('Create Tag With Faker', () => {
           
            
            validNameLens.forEach(len => {
                it(`Create valid tag with title of length ${len}`, () => {
                    let name = faker.lorem.words(len)
                    name = (name.length > len) ? name.substring(0, len) : name
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
                    cy.goToNewTag()
                    cy.typeNameTag(name)
                    cy.clickOnSaveTag() 
                    cy.getAlertButtonSaveTag().then(($title) => {
                        expect($title.get(0).innerText).to.include('Retry')
                    })
                })
            })
            
             
        })
        


        
        context('Edit Tags With Faker', () => {
            
            
            validNameLens.forEach(len => {
                it(`Edit Valid Tag with title of length ${len}`, () => {
                    let name = faker.lorem.words(len)
                    name = (name.length > len) ? name.substring(0, len) : name
                    cy.clickOnFirstTag()
                    cy.clarAndtypeNameTag(name)
                    cy.clickOnSaveTag() 
                    cy.getAlertButtonSaveTag().then(($name) => {
                        expect($name.get(0).innerText).to.include('Save')
                    })
                })
            })
            
            
            
            invalidNameLens.forEach(len => {
                it(`Edit Invalid Tag with title of length ${len}`, () => {
                    let name = faker.lorem.words(len)
                    name = (name.length > len) ? name.substring(0, len) : name
                    cy.clickOnFirstTag()
                    cy.clarAndtypeNameTag(name)
                    cy.clickOnSaveTag() 
                    cy.getAlertButtonSaveTag().then(($name) => {
                        expect($name.get(0).innerText).to.include('Retry')
                    })
                })
            })
            
        })
        

        
        context('Create Tag With Mockaroo', () => {
           
            
            validNameLens.forEach(len => {
                it(`Create valid tag with title of length ${len}`, () => {

                    const options = {
                        "url": 'https://my.api.mockaroo.com/tagcontents.json',
                        "method": "GET",
                        "headers": {
                            "X-API-Key": "28d0f660"
                        }
                    }


                    cy.request(options).then(response => {
                        let name = response.body.title
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
            })
            

            
            invalidNameLens.forEach(len => {
                it(`Create invalid tag with title of length ${len}`, () => {

                    const options = {
                        "url": 'https://my.api.mockaroo.com/tagcontents.json',
                        "method": "GET",
                        "headers": {
                            "X-API-Key": "28d0f660"
                        }
                    }

                    cy.request(options).then(response => {
                        let name = response.body.title
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
             
        })
        


       context('Edit Tags With Mockaroo', () => {
            
            
            validNameLens.forEach(len => {
                it(`Edit Valid Tag with title of length ${len}`, () => {

                    const options = {
                        "url": 'https://my.api.mockaroo.com/tagcontents.json',
                        "method": "GET",
                        "headers": {
                            "X-API-Key": "28d0f660"
                        }
                    }

                    cy.request(options).then(response => {
                        let name = response.body.title
                        name = (name.length > len) ? name.substring(0, len) : name
                        cy.goToPagesPage()//dmmy
                        cy.goToTagsPage()
                        cy.clickOnFirstTag()
                        cy.clarAndtypeNameTag(name)
                        cy.clickOnSaveTag() 
                        cy.getAlertButtonSaveTag().then(($name) => {
                            expect($name.get(0).innerText).to.include('Save')
                        })
                    })
                })
            })
            
            invalidNameLens.forEach(len => {
                it(`Edit Invalid Tag with title of length ${len}`, () => {

                    const options = {
                        "url": 'https://my.api.mockaroo.com/tagcontents.json',
                        "method": "GET",
                        "headers": {
                            "X-API-Key": "28d0f660"
                        }
                    }

                    cy.request(options).then(response => {
                        let name = response.body.title
                        name = (name.length > len) ? name.substring(0, len) : name
                        cy.goToPagesPage()//dmmy
                        cy.goToTagsPage()
                        cy.clickOnFirstTag()
                        cy.clarAndtypeNameTag(name)
                        cy.clickOnSaveTag() 
                        cy.getAlertButtonSaveTag().then(($name) => {
                            expect($name.get(0).innerText).to.include('Retry')
                        })
                    })
                })
            })
            
            
        })
        
        
    })
    
})


