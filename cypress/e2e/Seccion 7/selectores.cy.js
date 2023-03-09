///<reference types="Cypress" />

require('cypress-plugin-tab')
require('@cypress/xpath')

describe("Prueba de selectores",() =>{

    it("Buscar un elemento por id",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").should("be.visible").type("Héctor Adrián")
    })

    it("Buscar un elemento por atributo",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("[placeholder='name@example.com']").should("be.visible").type("adrianbenavidez@gmail.com")
    })

    it("Buscar un elemento por xpath",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.xpath("//textarea[contains(@placeholder,'Current Address')]").should("be.visible").type("Barrio ejemplo")
    })

    it("Buscar un elemento por contains",()=>{
        cy.visit("https://demoqa.com/radio-button")
        cy.get(".custom-control-label").contains("Yes").click()
        cy.wait(2000)
        cy.get(".custom-control-label").contains("Impressive").click()
    })

    it.only("Buscar un elemento por Copy selector",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get("#userNumber").should("be.visible").type("351334234")
        cy.wait(2000)
    })


    



   
})//Cierre de describe