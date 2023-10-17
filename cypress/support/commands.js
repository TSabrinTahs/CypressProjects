// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <refrence types="Cypress"/>


/// <refrence types="cypress=xpath"/>

Cypress.Commands.add('clickLink', (linkURL)=>{
    cy.get('a').contains(linkURL).click();

});


// for overwrite function
// Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options={})=>{

//     if(typeof text==='object'){
//         options=text
//         text=filter
//         filter=undefined

//     }

//     options.matchCase=false;
//     return originalFn(subject, filter, text, options);

// });

Cypress.Commands.add('Login', (einput,email,ebutton, pinput, password, pbutton)=>{
    cy.get(einput).type(email);
    cy.get(ebutton).click();
    cy.get(pinput).type(password);
    cy.get(pbutton).click();

});
