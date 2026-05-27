describe('Login de Usuário', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve fazer login com sucesso quando as credenciais forem válidas', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.contains('Swag Labs')
        cy.url().should('include', '/inventory')
    })
})