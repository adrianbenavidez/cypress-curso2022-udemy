///<reference types="Cypress" />

describe("Validando el título de la página",() =>{

    it("Ejemplo de pageup",() =>{
        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type('{pageup}')  
    })

    //.only Nos permite solo correr el test seleccionado
    it.only("Ejemplo de pagedown",() =>{
        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type('{pagedown}')
    })

})//Cierre de describe