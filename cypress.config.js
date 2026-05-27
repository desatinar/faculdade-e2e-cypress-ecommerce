const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Ativa o reporter
  reporterOptions: {
    charts: true,               
    reportPageTitle: 'Exercício - Testes de Software', 
    embeddedScreenshots: true,  
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.saucedemo.com'
  },
});
