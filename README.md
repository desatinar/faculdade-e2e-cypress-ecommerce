# Projeto E2E: Cypress - Ecommerce (Faculdade)

Este repositório contém testes end-to-end usando Cypress para uma loja de exemplo. Os testes ficam em `cypress/e2e` e cobrem fluxos como login, ordenação de produtos e carrinho.

## Requisitos

- Node.js (v16 ou superior recomendado)
- npm ou yarn

## Instalação

1. Instale dependências:

```bash
npm install
```

ou, se usar yarn:

```bash
yarn
```

## Executando os testes

- Abrir a interface do Cypress (modo interativo):

```bash
npx cypress open
```

- Executar todos os testes em modo headless:

```bash
npx cypress run
```

- Executar um spec específico:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

Observação: o arquivo de configuração está em `cypress.config.js`. Ajuste conforme necessário (baseUrl, timeouts, etc.).

## Relatórios

Se você instalou o `cypress-mochawesome-reporter` como dependência de desenvolvimento, por exemplo:

```bash
npm install --save-dev cypress-mochawesome-reporter
```

Configure o reporter conforme a documentação do pacote (por exemplo, registrando-o em `cypress/support/e2e.js` e ajustando as opções de reporter). Ao executar o `npx cypress run`, passe as opções de reporter desejadas ou use um script no `package.json` para gerar os relatórios.

## Estrutura do projeto

- `cypress/e2e/` — arquivos de teste (ex.: `login.cy.js`, `carrinho.cy.js`)
- `cypress/fixtures/` — dados estáticos para testes
- `cypress/support/` — comandos e configuração global
- `cypress.config.js` — configuração do Cypress

## Scripts úteis (package.json)

- `npm test` ou `npm run test` pode estar configurado para rodar os testes (verificar `package.json`).
