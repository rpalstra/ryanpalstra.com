describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the image', () => {
    cy.get('img')
    .should('be.visible')
  })
})
