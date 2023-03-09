///<reference types="Cypress" />

require('cypress-plugin-tab')

//Para poder ejecutar la funcion tab() y que se use la tecla del tabulador se debe importar la libreria
//https://www.npmjs.com/package/cypress-plugin-tab

describe("",() =>{

    it("",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")

        cy.get("#firstName").type("Héctor").tab()
        .type("Benavidez").tab()
        .type("adrianbenavidez119@gmail.com")
    })

})//Cierre de describe