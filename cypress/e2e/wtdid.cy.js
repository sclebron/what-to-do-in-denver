/// <reference types="cypress" />

describe('what-to-do-in-denver', () => {
    beforeEach(() => {
        cy.visit('https://sclebron.github.io/what-to-do-in-denver/')
    })

    //should have backgroundimage - :)
    it('displays background image', () => {
        cy.get('.backgroundImg').should('be.visible')
    })

    //should display header - :)
    it('displays header on homepage', () => {
        cy.get('.header').should('be.visible')
    })

    //should display questionnaire button - :)
    it('displays questionnaire button', () => {
        cy.get('.questionnaireBtn').should('be.visible');
    })

    //questionnaire button should redirect to questionnaire page - :)
    it('clicking on questionnaire button redirects to questionnaire page', () => {
        cy.get('.questionnaireBtn').click()

        cy.url().should('eq', 'https://sclebron.github.io/questionnaire')
    })

})

describe('what-to-do-in-denver-questionnaire', () => {
    beforeEach(() => {
        cy.visit('https://sclebron.github.io/what-to-do-in-denver/');
        cy.get('.questionnaireBtn').click(); 
    })

    //questionnaire should display on questionnaire page - X
    it('questionnaire should display', () => {
        cy.get('.questionnaireContainer').should('be.visible')
    })

    //when user selects option on questionnaire it should become checked
    it('selectbox gets checked after user clicks', () => {
        cy.get('.options input[type="checkbox').first().check().should('be.checked')
    })

    //when user clicks again on option it should become unchecked
    it('option unchecks when user clicks a second time', () => {
        cy.get('.options input[type="checkbox').first().uncheck().should('not.be.checked')
    })

    //all activities button should redirect to all page
    it('clicking on all activities button redirects to all page', () => {
        cy.get('.allBtn').click()

        cy.url().should('eq', 'https://sclebron.github.io/all')
    })

    //random activities button should redirect to random page
    it('clicking on random activity button redirects to random page', () => {
        cy.get('.randomBtn').click()

        cy.url().should('eq', 'https://sclebron.github.io/random')
    })

})


//two of these, one for when a user doesn't select anything and then one with selections and probably will then make multiple with different selections
describe('what-to-do-in-denver-all', () => {
    beforeEach(() => {
        cy.visit('https://sclebron.github.io/what-to-do-in-denver/');
        cy.get('.questionnaireBtn').click(); 
        cy.get('.allBtn').click(); 
    })

    it('no-activities should display', () => {
        cy.get('.no-activities').should('be.visible');
    })
})

describe('what-to-do-in-denver-all', () => {
    beforeEach(() => {
        cy.visit('https://sclebron.github.io/what-to-do-in-denver/');
        cy.get('.questionnaireBtn').click(); 
        //find out how to select certain boxes from the questionnaire options
    });

    it('selects checkboxes from options', () => {
        cy.get('.questionnaire').should('exist');

        cy.get('.question').each(($question) => {
            cy.wrap($question).find('.options').each(($option) => {
                cy.wrap($option).find('.selectbox').check();
                cy.wrap($option).find('.selectbox').should('be.checked');                
            });
        });
    });

    it('navigates to all page', () => {
        cy.get('.allBtn').click();
    });

})

//random activities container should be visible