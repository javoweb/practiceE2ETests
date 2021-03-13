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
    cy.wait(1500)
})

Cypress.Commands.add("goToPublishedPage", () => {
    cy.get('a.ember-view[title="Published"]').click()
})

Cypress.Commands.add("visitLoginPage", () => {
    cy.visit('ghost/#/signin')
    cy.wait(1500)
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

// Focus Commands

Cypress.Commands.add("focusOnContents", (text, clear = true) => {
    cy.get('.koenig-editor__editor.__mobiledoc-editor').focus()
})