describe('Test 1', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('SelfGrow')
    cy.contains('About Us')
    cy.contains('Services')
    cy.contains('Contact')
  })
})