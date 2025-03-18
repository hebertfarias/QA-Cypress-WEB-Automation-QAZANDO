# Testes Automatizados com Cypress - Página de Login

Este repositório contém testes automatizados utilizando o Cypress para validar o comportamento da página de login de uma aplicação de exemplo. O objetivo principal é verificar diferentes cenários de login, como login com sucesso, e-mails e senhas inválidas, e campos vazios.

## Funcionalidades Testadas

- **Login com sucesso**: Valida que o login é realizado corretamente quando os dados inseridos são válidos.
- **E-mail inválido**: Verifica o comportamento do sistema quando um e-mail inválido é inserido.
- **Senha inválida**: Verifica o comportamento do sistema quando uma senha incorreta é inserida.
- **E-mail vazio**: Verifica o comportamento do sistema quando o campo de e-mail é deixado vazio.
- **Senha vazia**: Verifica o comportamento do sistema quando o campo de senha é deixado vazio.

## Requisitos

- **Node.js**: 14.x ou superior
- **Cypress**: 10.x ou superior

## Configuração do Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://seu-repositorio.git
   cd nome-do-repositorio

   Estrutura do Projeto

    cypress/integration: Contém os arquivos de teste.
    cypress/support: Contém arquivos de suporte como funções reutilizáveis para interações comuns (ex: login-usuario.js).
    cypress/fixtures: Contém arquivos de fixture para testes.
    package.json: Contém as dependências e scripts do projeto.


Cenários de Teste
1. Login com sucesso

    O teste simula o preenchimento dos campos de login com e-mail e senha válidos e valida que a mensagem "Login realizado" é exibida após a submissão do formulário.

2. E-mail inválido

    Testa o comportamento da aplicação quando um e-mail inválido é fornecido, verificando se a mensagem de erro "E-mail inválido." é exibida.

3. Senha inválida

    Testa o comportamento da aplicação quando uma senha inválida é fornecida, validando a mensagem de erro "Senha inválida."

4. E-mail vazio

    Simula o preenchimento do campo de senha, mas deixa o campo de e-mail vazio, verificando a mensagem de erro "E-mail inválido."

5. Senha vazia

    Simula o preenchimento do campo de e-mail e deixa o campo de senha vazio, validando a mensagem de erro "Senha inválida."

Personalizando os Testes

Os testes podem ser personalizados conforme necessário. Para isso, basta ajustar os campos de e-mail, senha e as URLs conforme o ambiente de teste que você estiver utilizando.
Contribuindo

Se você deseja contribuir com este projeto, fique à vontade para enviar pull requests com melhorias ou correções de bugs. Agradecemos sua colaboração!
Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.


Esse `README.md` explica de forma clara e concisa o que o projeto faz, como configurar e executar os testes, e quais cenários estão sendo testados no seu código Cypress.


