//Prueba para crear un tag con el mismo nombre de un tag ya creado
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
        cy.get('input[id="tag-name"]').click({force:true}).type('Prueba')
        cy.get('input[name="accent-color"]').click({force:true}).type('FF5733')

        cy.get('header.gh-canvas-header').within(() => {
            cy.get('button').click()
        })

        //Crear segundo tag con el mismo nombre
        cy.get('a[id="ember38"]').click()
        //Presionar New tag
        cy.get('.ember-view.gh-btn.gh-btn-green').click()

        cy.get('input[id="tag-name"]').click({force:true}).type('Prueba')
        cy.get('input[name="accent-color"]').click({force:true}).type('33FF46')

        cy.get('header.gh-canvas-header').within(() => {
            cy.get('button').click()
        })

        //Entrar a la lista de tags
        cy.get('a[id="ember38"]').click()
        cy.get('li.gh-list-row.gh-tags-list-item.ember-view').then(($items) => {
            expect($items.length).to.equal(3)
        })

    })

})