beforeEach(() => {
  cy.visit('/')
})

describe('Films page', () => {
  it('smoke test: frontpage can be opened', () => {
    cy.contains('Películas mierder')
  })
})