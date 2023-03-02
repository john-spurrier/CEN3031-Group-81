describe('Login button', () => {
    it('Brings you to the correct login page', () => {
      cy.visit('/')
  
      // Find the login button and click it
      cy.contains('login').click()
  
      // Assert that the URL of the current page contains "login"
      cy.url().should('include', '/login')
  
      // Assert that the correct login page is displayed
      cy.contains('Login Page')
    })
  })