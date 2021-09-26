describe('Test login/logout functionality', () => {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('eq', 'http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd

            cy.login(username, password)
        })
    })

    it('Should visit Pay Bills page and add new payee to list', () => {
        cy.get('#pay_bills_tab > a').click()
        cy.contains('Add New Payee').click().wait(300)
        cy.get('#ui-tabs-2 > .board-header').contains('Who are you paying?')
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Adress')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('Details')
        cy.log('after filling form')
        cy.get('#add_new_payee').click()
        cy.log('after Add button click')
        cy.get('#alert_content')
            .should('be.visible')
            .contains('The new payee Name was successfully created.')
        cy.log('after success message validate')
    });

})