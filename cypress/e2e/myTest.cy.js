

describe('mytest',()=>{
    it('get makeup product',()=>{
        cy.visit('https://www.amazon.com/')
        cy.title().should('eq','Amazon.com. Spend less. Smile more.')
        cy.get('#nav-logo-sprites');

        cy.get("img[alt='Beauty picks']");

        
        
    
    });//it ends


    it.skip('searching iPhone',()=>{
        cy.visit('https://www.amazon.com/')
        cy.title().should('eq','Amazon.com. Spend less. Smile more.')
        cy.get('#nav-logo-sprites');

      


        //searching for iphone
        cy.get('#twotabsearchtextbox').type('iphone'); 
        cy.get('.autocomplete-results-container')
        .find('.s-suggestion-container')
        .find('div')
        .contains('iphone');
        cy.get('.s-heavy')
        

//alternative way to find element by index
        /* cy.get('.s-heavy').each(($li,index)=>{
             if(index==3){
                 cy.wrap($li).click();
             }
         });*/

       });//it ends


       it.only('affiliate marketing',()=>{
        cy.visit('https://www.amazon.com/')
        cy.title().should('eq','Amazon.com. Spend less. Smile more.');
        cy.get('#navFooter');
        //cy.get('.navFooterVerticalColumn navAccessibility');
    
        cy.get("div[role='presentation']")
        .find('ul')
        .find('li')
        .contains('Become an Affiliate').click();


       });//it ends

    
});