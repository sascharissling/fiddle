describe('Login and create new Chat', function() {
  it('Logs in as a test user', function() {
    const website = 'http://localhost:3000';
    cy.visit(website);
    cy.get('[data-test-id="user-name-input"]')
      .type('TestUser1')
      .should('have.value', 'TestUser1')
      .wait(1300)
      .type('{enter}');
  });
  it('Enters the dialogue to create a new chat with TestUser2', function() {
    cy.get('[data-test-id="create-new-chat"]')
      .click()
      .wait(500)
      .get('[data-test-id="partner-name-input"]')
      .type('TestUser2')
      .should('have.value', 'TestUser2')
      .type('{enter}');
  });
});
