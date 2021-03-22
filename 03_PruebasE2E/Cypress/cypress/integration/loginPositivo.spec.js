//Prueba para hacer un login de administrador con entradas correctas
describe('Prueba la pagina ghost', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(7000)
    })

    it('Ingresar credenciales', () => {
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type('luque.lopez.adriana@gmail.com')
            cy.get('input[id="ember10"]').type('adrianaluque')
            cy.get('button[id="ember12"]').click()
        })
        cy.wait(1000)
        //Redireccionar a la nueva pagina y verificar contenido
        cy.get('.gh-nav-menu-details-blog').contains('PruebasSoftware2')
        
    })

})