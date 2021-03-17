// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


// Go To Commands

Cypress.Commands.add("goToNewPost", () => {
    cy.get('a[title="New post"]').click()
})
Cypress.Commands.add("goToPostsPage", () => {
    cy.visit('ghost/#/posts/')
    cy.wait(2000)
})

Cypress.Commands.add("goToPublishedPage", () => {
    cy.get('a.ember-view[title="Published"]').click()
})

Cypress.Commands.add("visitLoginPage", () => {
    cy.visit('ghost/#/signin')
    cy.wait(2000)
})

Cypress.Commands.add("goToPagesPage", () => {
    cy.visit('ghost/#/pages/')
    cy.wait(2000)
})

Cypress.Commands.add("goToNewPage", () => {
    cy.xpath('//html/body/div[2]/div/main/section/header/section/a').click()
    //cy.visit('ghost/#/editor/page')
    cy.wait(2000)
})

Cypress.Commands.add("goToTagsPage", () => {
    cy.visit('ghost/#/tags/')
    cy.wait(2000)
})

Cypress.Commands.add("goToNewTag", () => {
    cy.xpath('//html/body/div[2]/div/main/section/header/section/a').click()
    cy.wait(2000)
})


// Typing Commands

Cypress.Commands.add("typeTitle", (text) => {
    cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').should('not.be.disabled').clear().type(text)
})

Cypress.Commands.add("typeContents", (text, clear = true) => {
    if (clear) {
        cy.get('.koenig-editor__editor.__mobiledoc-editor').should('not.be.disabled').clear().type(text)
    } else {
        cy.get('.koenig-editor__editor.__mobiledoc-editor').should('not.be.disabled').type(text)
    } 
})

Cypress.Commands.add("fillLogin", (email, password) => {
    cy.get('#ember8').type(email)
    cy.get('#ember10').type(password)
    cy.get('#ember12 > span')
})

Cypress.Commands.add("typeNameTag", (name) => {
    //myInput = cy.xpath('//*[@id="tag-name"]')
    //myInput.type(name)
    cy.get('#tag-name').type(name,{ force: true })

})

Cypress.Commands.add("clarAndtypeNameTag", (name) => {
    cy.get('#tag-name').clear({ force: true })
    cy.get('#tag-name').type(name,{ force: true })
})

// Get Commands

Cypress.Commands.add("getLoginError", () => {
    cy.wait(1000).get('p.main-error')
})

Cypress.Commands.add("getAlert", () => {
    cy.get('.gh-alert-content')
})

Cypress.Commands.add("getNotification", () => {
    cy.get('.gh-notification-title')
})

Cypress.Commands.add("getFirstPostTitle", () => {
    cy.get('h3.gh-content-entry-title').filter(':visible').first()
})

Cypress.Commands.add("getAlertButtonSaveTag", () => {
    cy.xpath('//html/body/div[2]/div/main/section/form/header/section/button/span')
})


// Click Commands

Cypress.Commands.add("clickOnFirstPost", () => {
    cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').filter(':visible').first().click({force: true})
})

Cypress.Commands.add("clickOnPublish", () => {
    cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click()
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
})

Cypress.Commands.add("clickOnDelete", () => {
    cy.get('button.post-settings').click()
    cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
})

Cypress.Commands.add("clickOnCancel", () => {
    cy.get('button.gh-btn[data-ember-action=""]').last().click({force: true})
})

Cypress.Commands.add("clickOnAccept", () => {
    cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').first().click()
})

Cypress.Commands.add("clickOnLogout", () => {
    cy.get('.gh-user-email').click()
    cy.get('.dropdown-item.user-menu-signout.ember-view').click()
})

Cypress.Commands.add("clickOnReturnButton", () => {
    cy.get('a.blue.link.fw4.flex.items-center.ember-view[href="#/posts/"]').should('be.visible').click()
})

Cypress.Commands.add("clickOnFirstPage", () => {
    cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').filter(':visible').first().click({force: true})
})

Cypress.Commands.add("clickOnPublishAndSchedule", () => {
    cy.wait(10000)
    cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click()
    cy.xpath('//html/body/div[1]/div/div/section/div/div[2]/div[1]').click()
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
})

Cypress.Commands.add("clickOnPublishPage1", () => {
    cy.xpath('//html/body/div[2]/div/main/section/header/section/div/div[1]/span').click()
})

Cypress.Commands.add("clickOnPublishPage2", () => {
    cy.xpath('//html/body/div[1]/div/footer/button[2]/span').click()
})

Cypress.Commands.add("clickOnSaveTag", () => {
    cy.xpath('//html/body/div[2]/div/main/section/form/header/section/button/span').click()
})



Cypress.Commands.add("clickOnFirstTag", () => {
    //cy.xpath('//html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3').click()
    cy.xpath('//html/body/div[2]/div/main/section/section/ol/li[2]/a[4]/div/span').click()
})

// Focus Commands

Cypress.Commands.add("focusOnContents", (text, clear = true) => {
    cy.get('.koenig-editor__editor.__mobiledoc-editor').focus()
})