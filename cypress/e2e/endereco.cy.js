/// <reference types= "cypress" /> 
import EnderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade endereço - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
    EnderecoPage.editarEnderecoFaturamento('Ana', 'Fernandez', 'ebac', 'Brasil', 'Avenida Souza', '212', 'Ubatura', 'São Paulo', '08900-000', '9827371820', 'email@emails.com') 
    cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });


    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        
            ) 
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        });


});