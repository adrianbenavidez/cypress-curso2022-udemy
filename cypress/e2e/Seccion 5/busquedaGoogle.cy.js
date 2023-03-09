///<reference types="Cypress" />

describe("Validando el título de la página",() =>{

    it("",()=>{
        cy.visit("https://www.google.com/")

        cy.title().should('eq','Google')

        cy.get("[name='q']").type("cypress io {enter}") 
    })

})//Cierre de describe