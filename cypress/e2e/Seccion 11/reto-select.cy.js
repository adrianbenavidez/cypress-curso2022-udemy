///<reference types="Cypress" />

require('cypress-plugin-tab')
require('@cypress/xpath')

describe("Reto Select",() =>{

    it("Agregar todos los empleados",()=>{
        cy.visit("https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/")

        cy.title().should('eq','jQuery Dual List Box Demo')

        cy.xpath("//body/div[2]/div[1]/div[2]/button[1]").click()

        cy.wait(3000)
    })

    it("Agregar un empleado",()=>{
        cy.visit("https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/")

        cy.xpath("//*[@id='dual-list-box-employees']/div[1]/select")
            .should("be.visible")
                .select(["Adrienne Mcfadden","Adela Salazar","Ada Burke"]).then(()=>{

                    cy.xpath("//body/div[2]/div[1]/div[2]/button[2]").click()

                })

        
        cy.wait(3000)
    })

})//Cierre de describe