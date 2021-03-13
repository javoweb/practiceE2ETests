const credentials = require('../fixtures/credentials.json')
const loginCases = require('../fixtures/loginCases.json')

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
            cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        })
    })
    context('Admin Page Tests', () => {
        beforeEach(() => {
            cy.fillLogin(credentials.email, credentials.password).click()
            cy.wait(1000)
        })
        context('Create Post', () => {
            it('Start Post', () => {
                cy.goToNewPost()
                cy.typeTitle('Test')
                cy.typeContents('t', false)
            })
            it('Continue Post', () => {
                cy.goToPostsPage()
                cy.clickOnFirstPost()
                cy.typeContents('test')
                cy.clickOnPublish()
                cy.getNotification().then(($title) => {
                    expect($title.get(0).innerText).to.include('Published')
                })
            })
            it('Start Invalid Post', () => {
                cy.goToNewPost()
                cy.typeTitle('Test')
                cy.typeContents('t', false)
            })
            it('Continue Invalid Post', () => {
                cy.goToPostsPage()
                cy.clickOnFirstPost()
                cy.typeContents('test')
                cy.typeTitle('Testjckdksajsdkjasdjkdfskjbsdfkvbjsdnfvnjsdkjfvbhsbdd;aksdcn;jabsdckjl; klvcn lksndc ;lnxsdavjkasddvjkasdvkjnasjew;jvnw;jvnd;wkldsnvkdnsf;vlnfjdv;sdjfvn;sdjf vnsdjndvnsakdjn ;asnd lansdlkjajsdbkcbasdkjcnj;asdnc;jasndkbhasdjcnadsncasjbvadsf vsdv sdv sdf vsdf gfs fdtgerynhglksdca')
                cy.clickOnPublish()
                cy.getAlert().then(($title) => {
                    expect($title.get(0).innerText).to.include('Saving failed')
                })
            })
        })
        context('Edit Post', () => {
            beforeEach(() => {
                cy.goToPublishedPage()
                cy.clickOnFirstPost()
            })
            it('Edit Valid Post', () => {
                cy.typeContents('edited test')
                cy.clickOnPublish()
                cy.getNotification().then(($title) => {
                    expect($title.get(0).innerText).to.include('Updated')
                })
            })
            it('Edit Invalid Post', () => {
                cy.typeTitle('Testjckdksajsdkjasdjkdfskjbsdfkvbjsdnfvnjsdkjfvbhsbdd;aksdcn;jabsdckjl; klvcn lksndc ;lnxsdavjkasddvjkasdvkjnasjew;jvnw;jvnd;wkldsnvkdnsf;vlnfjdv;sdjfvn;sdjf vnsdjndvnsakdjn ;asnd lansdlkjajsdbkcbasdkjcnj;asdnc;jasndkbhasdjcnadsncasjbvadsf vsdv sdv sdf vsdf gfs fdtgerynhglksdca')
                cy.clickOnPublish()
                cy.getAlert().then(($title) => {
                    expect($title.get(0).innerText).to.include('Update failed')
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
                cy.url().should('eq', 'http://localhost:2368/ghost/#/posts?type=published')
            })
        })
        context('Logout', () => {
            it('Logout Ghost', () => {
                cy.clickOnLogout()
                cy.url().should('eq', 'http://localhost:2368/__/#/signin')
            })
        })
    })
})