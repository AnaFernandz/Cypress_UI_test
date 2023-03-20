/// <reference types= "cypress" /> 

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class= "product-block grid"]')
            // .first()
            //.eq(6)
            .contains('Aether Gym Pant')
            .click()
    })
    it('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 3

          cy.get('[class= "product-block grid"]')
              .contains('Abominable Hoodie').click()
              cy.get('.button-variable-item-M').click()
              cy.get('.button-variable-item-Blue').click()
              cy.get('.input-text').clear().type(quantidade)
              cy.get('.single_add_to_cart_button').click()
              cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
              cy.get('.woocommerce-message').should('contain', quantidade)
      }); 

it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
    cy.addProdutos ('Aero Daily Fitness Tee', 'M', 'Black' , 3 )
});

it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
    cy.addProdutos ('Arcadio Gym Short', '34', 'Red' , 10)
});

});