describe("Bienvenido al curso de Cypress sección 1", ()=> {

    it("Mi primer Test -> Hola mundo", ()=> {
        cy.log("Hola  mundo");
    })

    it("Segundo test -> campo name", ()=> {

        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").type("Hola Mundo");
        
    })

})//Cierre de describe