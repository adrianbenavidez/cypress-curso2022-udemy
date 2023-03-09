///<reference types="Cypress" />

require('cypress-plugin-tab')

describe("Primer Reto",() =>{

    it("Buscar un elemento",()=>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq","ToolsQA")
        cy.get("#searchBox").should("be.visible").type("Cierra")
    })

    it("Agregar un elemento",()=>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq","ToolsQA")
        
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.get("#firstName").should("be.visible").type("Adrian").tab()
        .type("Benavidez").tab()
        .type("adrianbenavidez@gmail.com").tab()
        .type("38").tab()
        .type("200").tab()
        .type("Sistemas")
        cy.get('#submit').should("be.visible").click()
    })

    it("Editar un elemento",()=>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq","ToolsQA")
        
        cy.get("#edit-record-2").should("be.visible").click()
        cy.get("#age").should("be.visible").clear().type("53")
        cy.get("#salary").should("be.visible").clear().type("120000")
        cy.get("#submit").should("be.visible").click()
    })

    it.only("Eliminar un elemento",()=>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq","ToolsQA")
        
        cy.get("#delete-record-3").should("be.visible").click()
    })





})//Cierre de describe