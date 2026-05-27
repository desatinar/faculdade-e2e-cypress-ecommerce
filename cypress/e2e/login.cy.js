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

    it('Deve fazer login com erro quando as credenciais foram inválidas', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret')
        cy.get('#login-button').click()

        cy.contains('Epic sadface: Username and password do not match any user in this service')
    })
})