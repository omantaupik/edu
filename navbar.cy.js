/// <reference types ="cypress"/>

describe("navbar test", function() {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.contains('Home').should('be.visible')
        cy.contains('Welcome to Zero Online Banking.').should('be.visible')
    });

    it('should display online banking content', function() {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
        cy.contains('Pay bills easily').should('be.visible')
        cy.contains('Account Summary').should('be.visible')
        cy.contains('Pay Bills').should('be.visible')
        cy.contains('Account Activity').should('be.visible')
        cy.contains('My Money Map').should('be.visible')
        cy.contains('Transfer Funds').should('be.visible')
        cy.contains('Online Statements').should('be.visible')
    });

    it('should display feedback content', function () {
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('h3').should('be.visible')
        cy.contains('IMPORTANT!').should('be.visible')
        cy.get('#name').focus('Your Name').should('be.visible')
        cy.get('#email').focus('Your email address').should('be.visible')
        cy.get('#subject').focus('Subject').should('be.visible')
        cy.get('#comment').focus('Type your questions here...').should('be.visible')
    });

    it('should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
        cy.contains('Welcome to Zero Online Banking.').should('be.visible')
    });
});
