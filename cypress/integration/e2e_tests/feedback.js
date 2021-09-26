describe('Feedback Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should load the feedback form', () => {
        cy.get('#feedback > div > strong').click()
        cy.url().should('eq', 'http://zero.webappsecurity.com/feedback.html')
    })
    it('Should fill feedback form', () => {
        cy.get('#name').type('oren')
        cy.get('#email').type('orenschuller@gmail.com')
        cy.get('#subject').type('exchange issue')
        cy.get('#comment').type('Hi, it seems as i cannot perform successfully currency exchange. Sincerely, Oren Schuller')
    })
    it('Should successfully submit form', () => {
        cy.get('.btn-signin').click()
    })
    it('Should display feedback message', () => {
        cy.get('h3').contains('Feedback')
    })
})
