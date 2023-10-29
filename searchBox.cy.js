/// <reference types="cypress"/>

describe("Searchbox Test", () => {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/")
    });
    it('Should type into searchbox an submit', () => {
        cy.get('#searchTerm')
        .type('online {enter}')
    });

    it('Should show search result page', () => {
        cy.get('h2').contains('Search Results:')
    });

    it('Should show search result page: online', () => {
        cy.contains('The following pages were found for the query: online').should('be.visible')
    });

    it('Should show result online: Free Access to Online Banking', () => {
        cy.contains('Free Access to Online Banking').should('be.visible')

    });

    it('Should show result online: Online Statements', () => {
        cy.contains('Online Statements').should('be.visible')
    });
});
