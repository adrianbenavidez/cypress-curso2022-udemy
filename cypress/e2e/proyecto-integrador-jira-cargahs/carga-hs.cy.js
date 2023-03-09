///<reference types="Cypress" />

require('@cypress/xpath')

describe("Carga hs en un día",() =>{

    it("loguearse",()=>{

        let fechaInicio = '01/feb./2023'
        let fechaFinalizacion = '02/feb./2023'
        let crio1 = "CRIO-30220"
        let descripcion = "Ajustes sobre la automatización"
        let fechaActual = "2023-03-08"


        // crea un nuevo objeto `Date`
        var today = new Date();
 
        // `getDate()` devuelve el día del mes (del 1 al 31)
        var day = today.getDate();

        if(day<10){day="0"+day}
 
        // `getMonth()` devuelve el mes (de 0 a 11)
        var month = today.getMonth() + 1;

        if(month<10){month="0"+month}
        
        // `getFullYear()` devuelve el año completo
        var year = today.getFullYear();
        
        let fechaActual2 = year+"-"+month+"-"+day
        // muestra la fecha de hoy en formato `MM/DD/YYYY`
        //cy.log("******"+fechaActual2);
        

        cy.viewport(1200, 900)
        cy.visit("https://signe.gruposancorseguros.com/secure/Tempo.jspa#/my-work/week?type=LIST")
        cy.xpath("//input[@id='login-form-username']").should("be.visible").type("hbenavidez")
        cy.xpath("//input[@id='login-form-password']").should("be.visible").type("Jupiter023")
        cy.xpath("//input[@id='login-form-submit']").should("be.visible").click()
        
        //Posicionamos el mouse sobre la columna del calendario
        cy.xpath("//*[@id='"+fechaActual2+"']/div/div").trigger('mouseover')
        //Hacemos click forzado sobre un elemento con display:none
        cy.xpath("//*[@id='"+fechaActual2+"']/div/div/div/div[1]").click({force: true})

        cy.get('#periodCheckbox').check()

        cy.xpath("//textarea[contains(@width,'100%')]").should("be.visible").type(descripcion)
        cy.get("[placeholder='Buscar incidencias…']").should("be.visible").type(crio1)
        cy.xpath("//*[@id='CRIO-30220-search-0-row']/div/img").click()
        

        cy.xpath("//input[contains(@id,'started')]").clear()
        cy.xpath("//input[contains(@id,'started')]").type(fechaInicio)
        cy.xpath("//*[@id='worklogForm']/div[5]/div/div/div[1]/label").click()
        cy.xpath("//input[contains(@id,'endDate')]").clear()
        cy.xpath("//input[contains(@id,'endDate')]").type(fechaFinalizacion)
        cy.get("#_Homeoffice_").check()


        cy.wait(7000)
        cy.xpath("//span[@class='sc-fYxtnH hFDdvK'][contains(.,'Cancelar')]").click()
       
    })

})//Cierre de describe