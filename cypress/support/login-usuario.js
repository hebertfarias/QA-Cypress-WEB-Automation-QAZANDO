import { ELEMENTS } from "./elements";

const el = ELEMENTS ;

class Login {
    acessarPaginaDeLogin(){
        cy.visit('https://automationpratice.com.br/login');
        //cy.get(el.loginButton).click();

    }
    preencherCampos(){
        cy.get(el.loginEmail).type('maria@hotmail.com');
        cy.get(el.loginPassword).type('Senha123');
        
    }
    submeterLogin(){
        cy.get(el.submitButton).click();
    }
}

export default new Login();