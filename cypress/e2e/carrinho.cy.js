describe('Funcionalidades do Carrinho', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Deve adicionar produto ao carrinho', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').click()

        cy.url().should('include', '/cart')
        cy.contains('Sauce Labs Backpack')
    })

    it('Deve remover produto do carrinho', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').click()
        cy.get('#remove-sauce-labs-backpack').click()

        cy.contains('Sauce Labs Backpack').should('not.exist')
    })
})