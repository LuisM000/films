beforeEach(() => {
  cy.visit('http://localhost:5173/')
})

describe('Films page', () => {
  it('smoke test: frontpage can be opened', () => {
    cy.contains('Películas mierder')
  })
})