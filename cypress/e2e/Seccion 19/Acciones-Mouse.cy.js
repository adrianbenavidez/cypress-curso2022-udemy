///<reference types="Cypress" />

require('cypress-plugin-tab')
require('@cypress/xpath')
require('@4tw/cypress-drag-drop')

describe("Practica acciones del mouse",() =>{

    it("Drag and Drop",()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        
        cy.get("#box2").drag("#box106",{force:true})
        cy.wait(2000)
        cy.get("#box4").drag("#box107",{force:true})
        cy.wait(2000)
        cy.get("#box5").drag("#box102",{force:true})
    
        cy.wait(5000)
    })

    it("Mouse Over",()=>{
        cy.visit("https://www.way2automation.com/")
        cy.title().should("eq","Get Online Selenium Certification Course | Way2Automation")
        cy.contains("Video Tutorial").trigger("mouseover").click()
        cy.wait(2000)
    })


    it.only("Mouse Over - Karate Labs",()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
        cy.contains('Create a List').click()
    })
    



})//Cierre de describe