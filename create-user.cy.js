/// <reference types="cypress"/>

describe("Create New User", () => {
    it('Succesfully create new user', () => {
        var user = {
            "name": "Eduwork",
            "job": "Education"
        }
        
        cy.request('POST','https://reqres.in/api/users?', user).then((respone) =>{
            expect(respone.status).equal(201)
        })

        cy.request('POST','https://reqres.in/api/users?', user).then((respone) =>{
            expect(respone.body).to.have.property('name','Eduwork')
        })

        cy.request('POST','https://reqres.in/api/users?', user).then((respone) =>{
            expect(respone.body).to.have.property('job','Education')
        })  
    });
});
