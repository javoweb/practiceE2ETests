describe('Ghost', () => {
    beforeEach(() => {
        cy.visit('ghost/#/signin')
        cy.wait(1500)
    })
    context('Login tests', () => {
        it('Wrong Credentials', () => {
            cy.get('#ember8').type('exam@exam.com')
            cy.get('#ember10').type('password')
            cy.get('#ember12 > span').click()
            cy.get('p.main-error').then(($p) => {
                expect($p.get(0).innerText).to.include('There is no user with that email address')
            })
        })

        it('Login Successful', () => {
            cy.get('#ember8').type('example@example.com')
            cy.get('#ember10').type('password')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
            cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        })
    })
    context('Admin Page Tests', () => {
        beforeEach(() => {
            cy.get('#ember8').type('example@example.com')
            cy.get('#ember10').type('password')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
        })
        context('Create Post', () => {
            it('Start Post', () => {
                cy.get('a[title="New post"').click()
                cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type('Test')
                cy.get('.koenig-editor__editor.__mobiledoc-editor').type('t')
            })
            it('Continue Post', () => {
                cy.get('a[href="#/posts/"]').first().click()
                cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').filter(':visible').first().click({force: true})
                cy.get('.koenig-editor__editor.__mobiledoc-editor').clear().type('test')
                cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click()
                cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
                cy.get('.gh-notification-title').then(($title) => {
                    expect($title.get(0).innerText).to.include('Published')
                })
            })
            it('Start Invalid Post', () => {
                cy.get('a[title="New post"').click()
                cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type('Test')
                cy.get('.koenig-editor__editor.__mobiledoc-editor').type('t')
            })
            it('Continue Invalid Post', () => {
                cy.get('a[href="#/posts/"]').first().click()
                cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').filter(':visible').first().click({force: true})
                cy.get('.koenig-editor__editor.__mobiledoc-editor').clear().type('test')
                cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type('Testjckdksajsdkjasdjkdfskjbsdfkvbjsdnfvnjsdkjfvbhsbdd;aksdcn;jabsdckjl; klvcn lksndc ;lnxsdavjkasddvjkasdvkjnasjew;jvnw;jvnd;wkldsnvkdnsf;vlnfjdv;sdjfvn;sdjf vnsdjndvnsakdjn ;asnd lansdlkjajsdbkcbasdkjcnj;asdnc;jasndkbhasdjcnadsncasjbvadsf vsdv sdv sdf vsdf gfs fdtgerynhglksdca')
                cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click()
                cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
                cy.get('.gh-alert-content').then(($title) => {
                    expect($title.get(0).innerText).to.include('Saving failed')
                })
            })
        })
        context('Edit Post', () => {
            beforeEach(() => {
                cy.get('a.ember-view[title="Published"]').click()
                cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').filter(':visible').first().click({force: true})
            })
            it('Edit Valid Post', () => {
                cy.get('.koenig-editor__editor.__mobiledoc-editor').clear().type('edited test')
                cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click()
                cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
                cy.get('.gh-notification-title').then(($title) => {
                    expect($title.get(0).innerText).to.include('Updated')
                })
            })
            it('Edit Invalid Post', () => {
                cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type('Testjckdksajsdkjasdjkdfskjbsdfkvbjsdnfvnjsdkjfvbhsbdd;aksdcn;jabsdckjl; klvcn lksndc ;lnxsdavjkasddvjkasdvkjnasjew;jvnw;jvnd;wkldsnvkdnsf;vlnfjdv;sdjfvn;sdjf vnsdjndvnsakdjn ;asnd lansdlkjajsdbkcbasdkjcnj;asdnc;jasndkbhasdjcnadsncasjbvadsf vsdv sdv sdf vsdf gfs fdtgerynhglksdca')
                cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click()
                cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
                cy.get('.gh-alert-content').then(($title) => {
                    expect($title.get(0).innerText).to.include('Update failed')
                })
            })
        })
        context('Delete Post', () => {
            beforeEach(() => {
                cy.get('a.ember-view[title="Published"]').click()
                cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-title').filter(':visible').first().click({force: true})
            })
            it('Cancel Delete Post', () => {
                cy.get('button.post-settings').click()
                cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
                cy.get('button.gh-btn[data-ember-action=""]').last().click()
            })
            it('Delete Post', () => {
                cy.get('button.post-settings').click()
                cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
                cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').first().click()
                cy.url().should('eq', 'http://localhost:2368/ghost/#/posts?type=published')
            })
        })
    })
})