import '@testing-library/cypress/add-commands'

beforeEach(() => {
  cy.visit('/')
})

describe('Films page', () => {
  it('smoke test: frontpage can be opened', () => {
    cy.contains('Mierder Movies')
  })

  it('should contains a film and can be navigate', () => {

    cy.get('main')
      .findByRole('list')
      .findByRole('listitem')
      .find('article')
      .contains('Sweeney Todd: The Demon Barber of Fleet Street')
      .click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.match(/^\/films\/\w+$/);
    })
  })

})