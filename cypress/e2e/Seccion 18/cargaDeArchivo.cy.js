///<reference types="Cypress" />

require('cypress-plugin-tab')
require('@cypress/xpath')

describe("Ejemplo de carga de archivo",() =>{

    it("Cargando un archivo...",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")

        cy.xpath("//input[@id='uploadPicture']").selectFile("cypress/fixtures/Logo.png")

    })

})//Cierre de describe