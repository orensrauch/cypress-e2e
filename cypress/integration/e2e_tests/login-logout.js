/// <reference types="cypress" />

describe('Test login/logout functionality', () => {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('eq', 'http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('user')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        cy.get('.btn').click()
        cy.log('after submission of invalid form')
        cy.get('.alert').contains('Login and/or password are wrong.')
        cy.log('after validate error message alert')
    })

    it('Should login to website', () => {
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd

            cy.login(username, password)
        })
        cy.get('ul.nav-tabs').should('be.visible')
    });

    it('Should successfully logout website', () => {
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('#logout_link').click()
        cy.get('#signin_button').should('be.visible')
    });

})

