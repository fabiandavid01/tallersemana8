//Prueba para recuperar contrase;a con usuario registrado
describe('Prueba la pagina ghost', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(7000)
    })

    it('Ingresar credenciales correctos', () => {
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type('luque.lopez.adriana@gmail.com')
            cy.get('button[id="ember11"]').click()
        })
        cy.wait(1000)
        //
        cy.get('.main-error').contains('Failed to send email. Reason: getaddrinfo EAI_AGAIN errdomain.')
        
    })

})