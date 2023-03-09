///<reference types="Cypress" />

require('cypress-plugin-tab')
require('@cypress/xpath')

describe("Segundo reto",() =>{

    it("Buscar una computadora",()=>{
        cy.visit("https://computer-database.gatling.io/computers")
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("APEXC")
        cy.xpath("//input[contains(@id,'searchsubmit')]").should("be.visible").click()
        cy.xpath("//a[@href='/computers/388'][contains(.,'APEXC')]").should("be.visible")
        cy.xpath("//a[contains(.,'Displaying 1 to 1 of 1')]").should("be.visible")
    })

    it("Agregar una computadora",()=>{
        cy.visit("https://computer-database.gatling.io/computers")
        cy.xpath("//a[@id='add']").should("be.visible").click()
        cy.xpath("//input[@id='name']").should("be.visible").type("Athlon 10")

        cy.xpath("//input[@id='introduced']").should("be.visible").type("2023-01-20")
        cy.xpath("//input[@id='discontinued']").should("be.visible").type("2023-01-24")
        cy.xpath("//select[@id='company']").should("be.visible").select("IBM").should("have.value","13")
        cy.xpath("//input[contains(@type,'submit')]").should("be.visible").click()
        cy.xpath("//div[@class='alert-message warning'][contains(.,'Done !  Computer')]").should("be.visible")
    })


   
})//Cierre de describe


