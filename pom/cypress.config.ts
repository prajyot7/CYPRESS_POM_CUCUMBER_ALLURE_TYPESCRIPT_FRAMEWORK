import { defineConfig } from 'cypress'

const allureWriter = require("@shelex/cypress-allure-plugin/writer");
export default defineConfig({
  video: true,
  defaultCommandTimeout: 5000,
  execTimeout: 5000,
  taskTimeout: 5000,
  pageLoadTimeout: 30000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  screenshotsFolder: 'logs/results/screenshots',
  videosFolder: 'logs/results/videos',
  env: {
    allureResultsPath: 'logs/results/allure-results',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    },
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/e2e/tests/**/*.cy.ts',
  },
})
