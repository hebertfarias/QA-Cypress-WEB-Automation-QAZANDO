# Cypress Web Testing — Login

Projeto de testes end-to-end com Cypress para validar o formulário de login da aplicação pública [Automation Practice](https://automationpratice.com.br/login).

## Cenários
- Login com dados válidos.
- E-mail em formato inválido.
- Senha incorreta.
- Campo de e-mail vazio.
- Campo de senha vazio.

## Tecnologias
Node.js 20 (recomendado), Cypress 14 e Mochawesome.

## Instalação e execução
```bash
npm install
npm test
npm run cy:open
```

## Relatórios
A execução headless usa Mochawesome e salva os resultados em `cypress/results`.

## Dependência externa
Mudanças no site, indisponibilidade ou alterações nos seletores podem exigir atualização dos testes.
