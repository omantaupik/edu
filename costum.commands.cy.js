/// <reference types="cypress"/>

describe("working with inputs", () => {
  it('visit the website and login', () => {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.url()
      .should('include', 'login.html')
      
      cy.login('username','password')
      cy.transferFund('1000','menstransfer')
  });
});