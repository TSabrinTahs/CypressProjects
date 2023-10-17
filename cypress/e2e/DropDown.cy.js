


describe('Dropdown Handler', ()=>{


    it.skip('dropdown with selector',()=>{

        cy.visit('https://ebs.oss.net.bd/');
        cy.get(".btn.btn-primary.ebs-login").click();
        cy.get('#username').type("sabrin@ba-systems.com");
        cy.get('#password').type("SAT@#!%nrin");
        cy.get("#kc-login").click();


       

//part to get application and click
/*cy.get('.wrapper');
cy.get('aside') 
.find('.slimScrollDiv') 
.find('ul')
.find('li')
.find('span')
.contains('Applications')
.click();


//part to get support under the application menu and click
cy.get('.sidebar-menu.tree');
cy.get('.treeview.menu-open') 
.find('ul')
.find('li')
.find('a')
.find('span')
.contains('Support')
.click();*/






cy.get('.wrapper');
cy.get('aside') 
.find('.slimScrollDiv') 
.find('ul')
.find('li')
.find('span')
.contains('Projects')
.click();       
        

cy.get('.sidebar-menu.tree');
cy.get('.treeview') 
.find('ul')
.find('li')
.find('a')
.find('span')
.contains('Activity Log')
.click();

cy.get('.btn.btn-default')
.contains('Add')
.click();



//project input from dropdown

cy.get('#create_activity_log_form');
cy.get("#select2-project_id-container")
.click();

cy.get("span[class='select2-container select2-container--default select2-container--open']")
.find('.select2-dropdown.select2-dropdown--below') 
.find('.select2-results');
cy.get('ul.select2-results__options>li').should('have.length', 254);

//cy.get('ul.select2-results__options>li').trigger('mouse over');

cy.get('.ui-tooltip-content');
cy.get('ul.select2-results__options>li').each(($li,index)=>{
        if(index==3){
            cy.wrap($li).trigger('mouse over');
        }
    });


cy.get('.ui-tooltip-content')
.find('ul.select2-results__options');
    //Business Automation Ltd ( Mobile Application & Games) ( Mir Hussain Kabir   )
                                                    


cy.get('#milestone_id').select('Documentation & Presentation')
.should('have.value', '2878');

cy.get('#task_id')
.select('Document writing and reviewing')
.should('have.value','2822');
                                                    
cy.get("select[name='task_type']")
.select('Documentation')
.should('have.value','Documentation');



    
        

    });//it ends



it.skip('auto suggest dropdown', ()=>{

    cy.visit('https://www.wikipedia.org/');
    cy.get('#searchInput').type('Dhaka');
    cy.get('.suggestions-dropdown').contains('Dhaka').click();

}); //it ends



it('auto suggest dropdown', ()=>{

    cy.visit('https://www.google.com/');
    cy.get('#APjFqb').type('Cypress Automation');
   cy.get('.G43f7e')
   .find('li')
   .find('div')
   .find('.pcTkSc')
   .find('div')
   .find('div');

  


  // click on the specific option

   cy.get('span').each(($el,index)=>{
        if($el.text()=='cypress automation'){
             cy.wrap($el).click();
        }
     });

     cy.get('a')
     .contains('https://www.cypress.io')
     .click();


      //alternative way
      /*
   cy.get('span')
   .contains('cypress automation')
   .click();
   */

    

}); //it ends




});