Cypress.Commands.add('registrarPessoa', (body) => {
  const token = Cypress.env('token');
  const baseUrl = Cypress.env('baseApiUrl');

  return cy.request({
    method: 'POST',
    url: `${baseUrl}/registrarPessoa/`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body,
    failOnStatusCode: false
  }).then((res) => cy.wrap(res).as('response'));
});
