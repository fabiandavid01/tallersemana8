//Configurar enlace a cuenta de Facebook
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

    it('Enlazar con facebook', () => {

        cy.get('ul>li').eq(7).click()
        cy.get('div.flex.flex-column.br3.shadow-1.bg-grouped-table.pa5').eq(3).click()
        cy.get('button.gh-btn').eq(8).click()
        cy.get('[placeholder="https://www.facebook.com/ghost"]').eq(0).clear()
        cy.get('input.ember-text-field.gh-input.ember-view').eq(0).type('https://www.facebook.com/aqp.pyladies')

        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()



        

    })

})