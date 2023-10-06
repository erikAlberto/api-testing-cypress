const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://api.demoblaze.com'
    
  },

  "reporter": "../node_modules/mochawesome/src/mochawesome.js",
  "reporterOptions": {
    "overwrite": false,
    "html": false,
    "json": true
  }
});
