describe('No Username Login', function() {
  it('Tries to login with no username', function() {
    const website = 'http://localhost:3000';
    cy.visit(website);
    cy.get('[data-test-id="user-name-input"]')
      .wait(1300)
      .type('{enter}');
  });
});
