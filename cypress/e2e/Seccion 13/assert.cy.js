///<reference types="Cypress" />

require('cypress-plugin-tab')
require('@cypress/xpath')

describe("Practica Assert",() =>{

    it("Ejercicio 1 - contains",()=>{
        cy.visit("https://automationexercise.com/")

        cy.title().should('eq','Automation Exercise')

        //localiza un contenedor luego se puede acceder con el contains directamente a un elemento que esta dentro del contenedor
        cy.get(".navbar-nav").contains(" Signup / Login").click()

        //Para usar en menus y todo lo que tenga listas dentro de un contenedor
        cy.get(".navbar-nav").contains(" Contact us").click()

        cy.get(".navbar-nav").contains(" Test Cases").click()

        cy.get(".container").contains("Test Case 3: Login User with incorrect email and password").click()
    })


    it("Ejercicio 2 - find/eq", ()=>{
        cy.visit("https://automationexercise.com/")

        cy.get(".navbar-nav").contains(" Test Cases").click()

        //Buscamos un contenedor, 
        //luego buscamos por atributo con "find" el conjunto de elementos como si fuera un array 
        //y finalmente accedemos a uno de ellos por el indice con el "eq"
        cy.get(".container").find("[data-toggle='collapse']").eq(5).click()
    })

    
    it("Ejercicio 3 - Mostrar el estado de un elemento", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.xpath("//a[@href='/products'][contains(.,'Products')]").click()

        cy.get(".container").find(".col-sm-4").find(".product-image-wrapper").find(".choose")
        .find(".nav-justified").eq(1).click()

        
        cy.get(".container").find("[class='product-information']").then((e)=>{

            //cy.log(e.text()) --> Muestra por consola el texto

            let estado = e.text()
            
            //cy.log(estado)  --> Muestra por consola el texto

            if(estado.includes("New"))
                cy.log("El articulo es nuevo")
                else
                cy.log("El articulo no es nuevo")
        })
    }) 


    it("Ejercicio 4 - Validar el precio de un articulo", ()=>{
        cy.visit("https://automationexercise.com/")
        cy.xpath("//a[@href='/products'][contains(.,'Products')]").click()

        cy.get(".container").find(".col-sm-4").find(".product-image-wrapper").find(".choose")
        .find(".nav-justified").eq(2).click()

        //Importante! se puede buscar directamente por el elemento en este caso por span
        //tambien por clase o por atributo como el get o find del principio
        cy.get(".container").find("[class='product-information']").find("span").find("span").then((e)=>{
            
            //cy.log(e.text()) --> Muestra por consola el texto

            let precio = e.text()
            precio = precio.slice(4,8)

            if(precio < 500){

                cy.log("Precio: "+precio+". El articulo esta dentro del presupuesto. Se puede comprar")
                cy.xpath("//button[contains(@type,'button')]").click()
            }else{
                cy.log("Precio: "+precio+". El articulo esta fuera de presupuesto")
                cy.xpath("//a[@href='/'][contains(.,'Home')]").click()
            }
            
        })
    }) 


    it("Ejercicio 5 - Practica have.text y contain.text", ()=>{
        
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.xpath("//input[@id='userName']").should("be.visible").type("Héctor")
        cy.xpath("//input[@id='userEmail']").should("be.visible").type("adrianbenavidez@gmail.com")
        cy.xpath("//button[@id='submit']").should("be.enabled").click()

        cy.xpath("//p[@id='name']").should("have.text","Name:Héctor")

        cy.xpath("//p[@id='name']").should("contain.text","ctor")

    }) 


    //contain.value > se utiliza para validar un textbox, retorna true en caso que contenga el texto
    //contain.text > se utiliza para validar un label
    //have.value > coincidencia exacta
    it("Ejercicio 6 - Practica have.text mas then", ()=>{
        
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.xpath("//input[@id='userName']").should("be.visible").type("Héctor")
        cy.xpath("//input[@id='userName']").should("have.value","Héctor").then(()=>{
            cy.xpath("//input[@id='userEmail']").should("be.visible").type("adrianbenavidez@gmail.com")
            cy.xpath("//button[@id='submit']").should("be.enabled").click()
        })
    })

    it("Ejercicio 7 - Practica have.class", ()=>{
        
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.xpath("//input[@id='userName']").should("be.visible").should("have.class","mr-sm-2")
        .type("Héctor")

        // con el and podemos concatenar 2 assert
        cy.xpath("//input[@id='userName']").should("be.visible").and("have.class","mr-sm-22")
        .type("Héctor Adrián")

    })

    it("Ejercicio 8 - Practica Negación en los assert", ()=>{
        
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        cy.xpath("//input[@id='userName']").should("be.visible").should("have.class","mr-sm-2")
        .type("Héctor")

        //not.have.class > valida que un elemento no contenga una clase
        cy.xpath("//input[@id='userName']").should("be.visible").and("not.have.class","mr-sm-22")
        .type("Héctor Adrián")

        //not.be.visible > valida que el elemento no esté visible
        cy.xpath("//input[@id='userName']").should("not.be.visible").and("not.have.class","mr-sm-22")
        .type("Héctor Adrián Benavidez")
    })

    it.only("Ejercicio 9 - Buscar un elemento con contains", ()=>{
        
        cy.visit("https://demoqa.com/login")
      
        //Busca un elemento por atributo y en este caso hay mas de un botón entonces filtra por el nombre Login
        cy.contains("[type='button']","Login").should("be.enabled").click({force:true})

        cy.wait(5000)
    })




})//Cierre de describe


