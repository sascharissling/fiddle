describe('Login', function() {
  it('Logs in as a test user', function() {
    const website = 'http://localhost:3000';
    cy.visit(website);
    cy.get('[data-test-id="user-name-input"]')
      .type('TestUser1')
      .wait(1300)
      .type('{enter}');
  });
});
