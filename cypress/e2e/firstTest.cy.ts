describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
  })

  it("should render the header", ()=>{
    cy.get('[data-testid="cy-header"]').should('exist')
  })
})