describe('Cadastro de Pessoa - API', () => {
  it('Deve tentar cadastrar Pessoa', () => {
    cy.fixture('pessoaValida').then((payload) => {
      cy.registrarPessoa(payload).then((response) => {
        console.log('🔍 STATUS:', response.status);
        console.log('📩 BODY:', response.body);
        expect(response.status).to.eq(200);
      });
    });
  });
});
