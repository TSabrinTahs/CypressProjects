

//require('@4tw/cypress-drag-drop');

describe('mouse operation', ()=>{

    it('mouseOver',()=>{
        cy.visit('https://www.amazon.com/');
        cy.get('#nav-link-accountList').trigger('mouseover');
      
    cy.get('#nav-flyout-accountList')
    
        cy.get('#nav-al-container');
        cy.get('#nav-al-your-account');
        cy.get('#nav_prefetch_yourorders>span').should('be.visible');
       


    });//it ends

    it('rightClick',()=>{
        cy.visit('https://www.amazon.com/');
        cy.get('#nav-link-accountList').trigger('contextmenu');//command for right click

        cy.visit('https://www.amazon.com/');
        cy.get('#nav-link-accountList').rightclick();
    });//it ends

    it('dobuleClick',()=>{
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
    cy.get("button[ondblclick='myFunction()']").trigger('dblclick');

    });//it ends

    it('drag&Drop using plugin',()=>{  //to install plugin npm install --save-dev @4tw/cypress-drag-drop
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

        cy.get('#box7').drag('#aswift_0');

    });//it end

    it.only('scrollingPage',()=>{
        cy.visit('https://www.amazon.com/');
        cy.get("a[href='https://music.amazon.com?ref=dm_aff_amz_com']").scrollIntoView({duration:5000});
        cy.get("a[aria-label='Amazon US Home']")
        .should('be.visible');

    });//it ends
   
    




}); //describe ends