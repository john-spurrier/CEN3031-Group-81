describe('Feedback form', () => {
    it('Valid inputs', () => {
      cy.visit('/')
  
      cy.get('input[name="name"]').type('Jeff')
      cy.get('input[name="email"]').type('Jeff@gmail.com')
      cy.get('textarea[name="message"]').type('Hi')
  
      cy.contains('Submit').click()
  
      cy.contains('Thank you for reaching out and we will get in contact with you as soon as we can!!')
    })
  
    it('Invalid inputs', () => {
      cy.visit('/')
  
      cy.get('input[name="name"]').type('Jeff')
      cy.get('input[name="email"]').type('Jeff@gmail.com')
  
      cy.contains('Submit').click()

  
      cy.contains('SelfGrow')
    cy.contains('About Us')
    cy.contains('Services')
    cy.contains('Contact')
    })
  })