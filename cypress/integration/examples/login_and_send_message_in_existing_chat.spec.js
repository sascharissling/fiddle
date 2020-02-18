describe('Login and send message in existing chat', function() {
  it('Logs in as TestUser1', function() {
    const website = 'http://localhost:3000';
    cy.visit(website);
    cy.get('[data-test-id="user-name-input"]')
      .type('TestUser1')
      .should('have.value', 'TestUser1')
      .wait(1300)
      .type('{enter}');
  });
  it('Opens existing chat', function() {
    cy.get('[data-test-id="chatlist-item"]').click();
  });
  it('Writes a chat message', function() {
    const chatMessage = 'Hello, Test 123';
    cy.get('[data-test-id="message-input"]')
      .type(chatMessage)
      .should('have.value', chatMessage)
      .wait(650)
      .type('{enter}');
  });
});
