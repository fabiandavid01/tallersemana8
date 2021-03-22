describe('Pagina ghost under monkeys', function() {

    it('pagina administrador', function(){
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000);
        cy.get('#ember8').type('luque.lopez.adriana@gmail.com');
        cy.get('#ember10').type('adrianaluque');
        cy.get('#ember12 > span').click({force: true});
        randomEvent(10);
    })
});

var nombreEventos = [linkEventRandom, buttonEventRandom, inputEventRandom];

function getRandomIntEventos() {
    let min = 0;
    let max = 3;
    var numeroRandom = Math.floor(Math.random() * (max - min)) + min;
    return numeroRandom;
};

function randomEvent(monkeys){
    var numMonkeys = monkeys;
    if( numMonkeys > 0) {
        var numRandom = getRandomIntEventos();
        console.log('-----------------------')
        console.log(numRandom);
        console.log(nombreEventos[numRandom]);
        nombreEventos[getRandomIntEventos()]();
        //randomFillTextField();
        var numMonkeysActualizado = numMonkeys -1;
        cy.wait(1000);
        //Llamando nuevamente a la funcion randomEvent pero con numero de monkeys disminuido
        randomEvent(numMonkeysActualizado);
    }
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function linkEventRandom() {
    //Esta funcion es para que haga click en un link random
    console.log('Click random link');
    cy.get('a').then($var_links => {
        var randomLink = $var_links.get(getRandomInt(0, $var_links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
        }
    });
};

function inputEventRandom() {
    //Esta funcion es para que se llene texto en un campo al azar
    console.log('Llenar un campo de texto');
    cy.get('input').then($var_inputs => {
        var randomInput = $var_inputs.get(getRandomInt(0, $var_inputs.length));
        if(!Cypress.dom.isHidden(randomInput)){
            cy.wrap(randomInput).click({force: true}).type('prueba texto');
        }
    });
};

function buttonEventRandom() {
    //Esta funcion es para seleccionar un boton al azar
    console.log('Seleccionar un boton');
    cy.get('button').then($var_buttons => {
        var randomButton = $var_buttons.get(getRandomInt(0, $var_buttons.length));
        if(!Cypress.dom.isHidden(randomButton)){
            cy.wrap(randomButton).click({force: true});
        }
    })
};

