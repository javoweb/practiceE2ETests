var faker = require('faker')

const credentials = require('../fixtures/credentials.json')
const parameters = require('../fixtures/parameters.json')
const loginCases = require('../fixtures/loginCases.json')

var validTitleLens = [
    parameters.postTitle.maxLength, 
    parameters.postTitle.maxLength - 1, 
    parameters.postTitle.maxLength - 2, 
    parameters.postTitle.maxLength - 10, 
    1, 
    2, 
    3,
    10,
    20,
    30,
    40
    
]
var invalidTitleLens = [
    parameters.postTitle.maxLength + 1, 
    parameters.postTitle.maxLength + 2, 
    parameters.postTitle.maxLength + 10,
    parameters.postTitle.maxLength + 20,
    parameters.postTitle.maxLength + 30,
    parameters.postTitle.maxLength + 40
]

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Ghost', () => {
    beforeEach(() => {
        cy.visitLoginPage()
    })
    context('Login tests', () => {
        loginCases.forEach(testCase => {
            it(`Case ${testCase.caseName}`, () => {
                cy.fillLogin(testCase.email, testCase.password).click()
                cy.getLoginError().then(($p) => {
                    expect($p.get(0).innerText).to.include(testCase.response)
                })
            })
        })

        it('Login Successful', () => {
            cy.fillLogin(credentials.email, credentials.password).click()
            cy.wait(1000)
            cy.url().should(($url) => {
                expect($url).to.contain('/ghost/#/site')
            })
        })
    })
    context('Admin Page Tests', () => {
        beforeEach(() => {
            cy.fillLogin(credentials.email, credentials.password).click()
            cy.wait(1000)
        })
        context('Create Post', () => {
            beforeEach(() => {
                cy.goToNewPost()
                cy.typeTitle(faker.lorem.word())
                cy.wait(500)
                cy.focusOnContents()
            })
            validTitleLens.forEach(len => {
                it(`Create valid post with title of length ${len}`, () => {
                    let title = faker.lorem.words(len)
                    title = (title.length > len) ? title.substring(0, len) : title
                    cy.wait(1000)
                    cy.goToPostsPage()
                    cy.clickOnFirstPost()
                    cy.typeContents(faker.lorem.sentence())
                    cy.typeTitle(title)
                    cy.clickOnPublish()
                    cy.getNotification().then(($title) => {
                        expect($title.get(0).innerText).to.include('Published')
                    })
                })
            })
            invalidTitleLens.forEach(len => {
                it(`Create invalid post with title of length ${len}`, () => {
                    let title = faker.lorem.words(len)
                    title = (title.length > len) ? title.substring(0, len) : title
                    cy.wait(1000)
                    cy.goToPostsPage()
                    cy.clickOnFirstPost()
                    cy.typeContents(faker.lorem.sentence())
                    cy.typeTitle(title)
                    cy.clickOnPublish()
                    cy.getAlert().then(($title) => {
                        expect($title.get(0).innerText).to.include('Saving failed')
                    })
                })
            }) 
        })
        context('Edit Post', () => {
            beforeEach(() => {
                cy.goToPublishedPage()
                cy.clickOnFirstPost()
            })
            validTitleLens.forEach(len => {
                it(`Edit Valid Post with title of length ${len}`, () => {
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
                it(`Edit Invalid Post with title of length ${len}`, () => {
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
        context('Save as Draft', () =>{
            beforeEach(() => {
                cy.goToNewPost()
                cy.typeTitle(faker.lorem.word())
                cy.focusOnContents()
            })
            validTitleLens.forEach(len => {
                it(`Save as draft post with title of length ${len}`, () => {
                    const options = {
                        "url": 'https://my.api.mockaroo.com/postContents.json',
                        "method": "GET",
                        "headers": {
                            "X-API-Key": "28d0f660"
                        }
                    }
                    cy.request(options).then(response => {
                         let title = response.body.title
                         title = (title.length > len) ? title.substring(0, len) : title
                         cy.goToPostsPage()
                         cy.clickOnFirstPost()
                         cy.typeContents(response.body.contents)
                         cy.typeTitle(title)
                         cy.clickOnReturnButton()
                         cy.getFirstPostTitle().then(($title) => {
                             expect($title.get(0).innerText).to.include(title)
                         })
                    })
                })
            })
            invalidTitleLens.forEach(len => {
                it(`Fail to save as draft post with title of length ${len}`, () => {
                    const options = {
                        "url": 'https://my.api.mockaroo.com/postContents.json',
                        "method": "GET",
                        "headers": {
                            "X-API-Key": "28d0f660"
                        }
                    }
                    cy.request(options).then(response => {
                         let title = response.body.title
                         title = (title.length > len) ? title.substring(0, len) : title
                         cy.goToPostsPage()
                         cy.clickOnFirstPost()
                         cy.typeContents(response.body.contents)
                         cy.typeTitle(title)
                         cy.clickOnReturnButton()
                         cy.url().should(($url) => {
                            expect($url).not.to.contain('/ghost/#/posts')
                        })
                    })
                })
            })
        })
        context('Delete Post', () => {
            beforeEach(() => {
                cy.goToPublishedPage()
                cy.clickOnFirstPost()
            })
            it('Cancel Delete Post', () => {
                cy.clickOnDelete()
                cy.clickOnCancel()
            })
            it('Delete Post', () => {
                cy.clickOnDelete()
                cy.clickOnAccept()
                cy.url().should(($url) => {
                    expect($url).to.contain('/ghost/#/posts?type=published')
                })
            })
        })
        context('Logout', () => {
            it('Logout Ghost', () => {
                cy.clickOnLogout()
                cy.url().should(($url) => {
                    expect($url).to.contain('/#/signin')
                })
            })
        })
    })
})