describe('Back button', () => {
    it('Brings you to the correct login page and then back to home', () => {
      cy.visit('/')
  
      cy.contains('login').click()
  
      cy.url().should('include', '/login')
  
      cy.contains('Login Page')

      cy.contains('Back').click()

      cy.contains('SelfGrow')
    cy.contains('About Us')
    cy.contains('Services')
    cy.contains('Contact')
    })
  })