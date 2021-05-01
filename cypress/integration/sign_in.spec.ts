describe('SignIn form validation', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('displays errors when the form is invalid', () => {
		cy.get('form').get('button[type="submit"]').click();

		cy.get('#test-email-error').should('have.text', 'E-mail é um campo obrigatório');
		cy.get('#test-password-error').should('have.text', 'Senha é um campo obrigatório');

		cy.get('#email').type('foo_email');
		cy.get('form').get('button[type="submit"]').click();
		cy.get('#test-email-error').should('have.text', 'Por favor, informe um e-mail válido');
	});

	it('displays no errors when the form is valid', () => {
		cy.get('#email').type('user@demo.com.br');
		cy.get('#password').type('Demo@2020');

		cy.get('form').get('button[type="submit"]').click({ force: true });

		cy.get('#test-email-error').should('not.exist');
		cy.get('#test-password-error').should('not.exist');
	});
});
