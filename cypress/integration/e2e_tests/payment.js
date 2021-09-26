describe('Payment function Test', () => {
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

    it('Should send new payment (fake)', () => {
        cy.get('#pay_bills_tab > a').click()
        cy.get('#sp_payee').select('apple')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('1999')
        cy.get('#sp_date').type('2020-01-10 {enter}')
        cy.get('#sp_description').type('monthly payment for iphone')
        cy.get('#pay_saved_payees').click()
    });

    it('Should show success message', () => {
        cy.get('#alert_content').should('be.visible').contains('The payment was successfully submitted.')
    });
})
