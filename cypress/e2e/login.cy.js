/// <reference types="cypress" />
import Login from '../support/login-usuario.js'

const { beforeEach } = require("mocha");

// Funcionalidades

describe("Pagina Login", () => {
  beforeEach(()=> {
    //cy.viewport('iphone-xr'); //fazer rodar no aparelho escolhido
      //Abrir a aplicação
      cy.visit('https://automationpratice.com.br/login');
  })
    // Cenários de Testes

    it("Login com sucesso", () => {
      //preencher email e senha
      Login.preencherCampos();
      cy.get('#materialUnchecked').click();
      //Clicar em Entrar
      Login.submeterLogin();
      //Valida mensagem
      cy.get('#swal2-title').should('be.visible');
      cy.get('#swal2-title').should('have.text', 'Login realizado');
      cy.get('.swal2-confirm').click();
    
    });

    it("E-mail inválido", () => {
        cy.get('#user').type('maria.email.com');
        cy.get('#password').type('123456');
        cy.get('#materialUnchecked').click();
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
        
      });

      it("Senha inválida", () => {
        cy.get('#user').type('maria@hotmail.com');
        cy.get('#password').type('123');
        cy.get('#materialUnchecked').click();
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'Senha inválida.');
        
      });
      
      it("E-mail vazio", () => {
        cy.get('#password').type('123456');
        cy.get('#materialUnchecked').click();
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
        
      });

      it("Senha vazia", () => {
        cy.get('#user').type('maria@hotmail.com');
        cy.get('#materialUnchecked').click();
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'Senha inválida.');
        
      });

});
