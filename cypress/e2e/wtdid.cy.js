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

    //questionnaire button should redirect to questionnaire page - X
    it('clicking on questionnaire button redirects to questionnaire page', () => {
        cy.get('.questionnaireBtn').click()

        cy.url().should('eq', 'https://sclebron.github.io/questionnaire')
    })

})

describe('what-to-do-in-denver-questionnaire', () => {
    beforeEach(() => {
        cy.visit('https://sclebron.github.io/questionnaire')
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
        cy.get('allBtn').click()

        cy.url().should('eq', 'https://sclebron.github.io/all')
    })

    //random activities button should redirect to random page
    it('clicking on random activity button redirects to random page', () => {
        cy.get('randomBtn').click()

        cy.url().should('eq', 'https://sclebron.github.io/random')
    })

})

describe('what-to-do-in-denver-all', () => {
    beforeEach(() => {
        cy.visit('https://sclebron.github.io/all')
    })
})

//all activities container should be visible

//random activities container should be visible