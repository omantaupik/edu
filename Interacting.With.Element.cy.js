/// <reference types="cypress"/>

describe("working with inputs", () => {
it('visit the website', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.url()
    .should('include', 'login.html')

    //username
    cy.get('#user_login')
    .click()
    .type('username')
    .should('have.value','username')
    
    //password
    cy.get('input[name="user_password"]')
    .click()
    .type('password')
    .should('have.value','password')

    //checkbox
    cy.get('#user_remember_me')
    .check()
    .should('be.checked')

});
});
