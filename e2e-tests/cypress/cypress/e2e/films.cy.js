beforeEach(() => {
  cy.visit('/')
})

describe('Films page', () => {
  it('smoke test: frontpage can be opened', () => {
    cy.contains('Películas mierder')
  })

  it('should contains a film and can be navigate', () => {
    cy.get('ul')
      .children('li')
      .contains('Sweeney Todd: The Demon Barber of Fleet Street')
      .click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.match(/^\/film\/\w+$/);
    })
  })

})