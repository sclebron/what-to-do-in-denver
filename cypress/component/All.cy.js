describe('All.cy.js', () => {
  it('passes', () => {
    cy.visit('https://sclebron.github.io/what-to-do-in-denver/')
    cy.get('[data-testid="all"]').should("exists");
  })
})

//cy.visit from a component spec is not allowed