const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //to create html report
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      
      // implement node event listeners here
    },
  },
});


//module.exports = {
//  defaultCommandTimeout: 10000, // Set the default command timeout to 10 seconds (adjust as needed)
  //requestTimeout: 10000 // Set the request timeout to 10 seconds (adjust as needed)
//};
