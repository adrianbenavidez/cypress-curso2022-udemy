///<reference types="Cypress" />

describe("Validando el título de la página",() =>{

    it("",()=>{
        cy.visit("https://demoqa.com/")

        cy.title().should('eq','ToolsQA')

        
    })

})//Cierre de describe