/// <reference types="cypress" />



describe('Searchbox Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox & submit using Enter', () => {
        cy.get('#searchTerm').type('bitcoin news {enter}')
    })

    it('Should show search results page', () => {
        cy.get('h2').contains('Search Results:')
    })
})