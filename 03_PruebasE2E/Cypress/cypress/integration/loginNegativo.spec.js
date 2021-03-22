//Prueba para hacer un login de administrador con entradas incorrectas
describe('Prueba la pagina ghost', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(7000)
    })

    it('Ingresar credenciales incorrectos', () => {
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type('example@gmail.com')
            cy.get('input[id="ember10"]').type('prueba123')
            cy.get('button[id="ember12"]').click()
        })
        cy.wait(1000)
        //
        cy.get('.main-error').contains('There is no user with that email address.')
        
    })

})