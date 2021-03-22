//Prueba para crear un tag
describe('Prueba la pagina ghost', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type('luque.lopez.adriana@gmail.com')
            cy.get('input[id="ember10"]').type('adrianaluque')
            cy.get('button[id="ember12"]').click()
        })
        cy.wait(1000)
    })

    it('Crear Tag', () => {

        cy.get('a[id="ember38"]').click()
        cy.get('section.gh-canvas.tags-view').should('be.visible')
        cy.get('a[id="ember71"]').click()
        cy.get('input[id="tag-name"]').click({force:true}).type('PruebaPositiva')
        cy.get('input[name="accent-color"]').click({force:true}).type('FF5733')

        cy.get('header.gh-canvas-header').within(() => {
            cy.get('button').click()
        })
        //Verificar que si se creo
        cy.get('a[id="ember38"]').click()
        cy.get('h3').then(($item) => {
            expect($item[3].innerText).to.equal('PruebaPositiva')
        })
        
    })

})