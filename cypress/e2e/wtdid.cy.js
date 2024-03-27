/// <reference types="cypress" />

describe('what-to-do-in-denver', () => {
    beforeEach(() => {
        cy.visit('https://sclebron.github.io/what-to-do-in-denver/')
    })

    //should have backgroundimage
    it('displays background image', () => {
        cy.get('')
    })

    //should display header
    it('displays header on homepage', () => {
        cy.get('.header').should('be.visible')
    })

    //should display questionnaire button
    it('displays questionnaire button', () => {
        cy.get('.questionnaireBtn').should('be.visible');
    })

    //questionnaire button should redirect to questionnaire page
    it('clicking on questionnaire button redirects to questionnaire page', () => {
        cy.get('questionnaireBtn').click()

        cy.url().should('eq', 'https://sclebron.github.io/questionnaire')
    })

})