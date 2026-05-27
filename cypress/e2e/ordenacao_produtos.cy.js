describe('Ordenação dos Produtos', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Deve alterar a ordenação dos produtos', () => {
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get('.inventory_item')
            .first()
            .find('.inventory_item_name')
            .should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    })
})