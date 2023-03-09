///<reference types="Cypress" />

describe("Acceso a PRE",() =>{

    it("Probando login",()=>{
        cy.visit("https://login-dev.gruposancorseguros.com/login?state=g6Fo2SBvT2k5eFlJZm5uUDlVaXVJX2toc09MUHNyWUZnak82QaN0aWTZIEM2YnItYVNPLVRMT2xiR2JHWEkyZWlWMnQ0dEdFYzZho2NpZNkgaUNNbEU4MUtLY05qZ21SUUtrODd4WExSQ3gzU3A0a2M&client=iCMlE81KKcNjgmRQKk87xXLRCx3Sp4kc&protocol=oauth2&response_type=code&scope=openid%20profile&connection=adcon&redirect_uri=http%3A%2F%2Fprevencionsaludpre.sancorseguros.net%2FLoginCallback.ashx")
        cy.get('.auth0-lock-input-username > .auth0-lock-input-wrap > .auth0-lock-input').type('svcAutomatPsal')
        cy.get('.auth0-lock-input-show-password > .auth0-lock-input-block > .auth0-lock-input-wrap > .auth0-lock-input').type('AP+2021lr')
        cy.get('#widget > div > div > form > div > div > div > button').should('be.visible').click({force:true})

    })

})//Cierre de describe







