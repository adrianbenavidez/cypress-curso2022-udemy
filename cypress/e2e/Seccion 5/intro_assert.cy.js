 ///<reference types="Cypress" />

require('cypress-plugin-tab')

//Para poder ejecutar la funcion tab() y que se use la tecla del tabulador se debe importar la libreria
//https://www.npmjs.com/package/cypress-plugin-tab

describe("Introducción al uso de Assert",() =>{

    it("",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        
        cy.get("#firstName").should('be.visible').type("Héctor Adrián")
        cy.get("#lastName").should('be.visible').type("BENAVIDEZ")
        cy.get("#userEmail").should('be.visible').should('be.be.enabled').type("adrianbenavidez@gmail.com")
    })




})//Cierre de describe