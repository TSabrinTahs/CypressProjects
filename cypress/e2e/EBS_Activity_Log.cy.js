


describe('Dropdown Handler', ()=>{


    it('dropdown with selector',()=>{

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



cy.get('#create_activity_log_form');
cy.get("#select2-project_id-container");
//.click();

// cy.get("span[class='select2-container select2-container--default select2-container--open']")
// .find('.select2-dropdown.select2-dropdown--below') 
// .find('.select2-results');


//cy.get('ul.select2-results__options');
//cy.get('li#select2-project_id-result-my3m-1077').should('have.text', 'Business Automation Ltd ( Mobile Application & Games) ( Mir Hussain Kabir   )');



                                                    








cy.get('#milestone_id')
.select('Documentation & Presentation')
.should('have.value', '2878');



cy.get('#task_id')
.select('Document writing and reviewing')
.should('have.value','2822');
                                                    
cy.get("select[name='task_type']")
.select('Documentation')
.should('have.value','Documentation');


cy.get("div[class='col-md-8'] div[class='col-md-12 specialRadio']")
.find('.pull-left');

cy.get("input[value='00:30']").check().should('be.checked');


cy.get("textarea[name='description']")
.type("Automation testing");
                                

cy.get("input[value='Medium']").check().should('be.checked');


cy.get('#submit_btn').click();
//cy.get('span.selection').click();
//find('.select2-selection select2-selection--single').click();
//.contains("Business Automation Ltd ( Mobile Application & Games) ( Mir Hussain Kabir   )");
      

      
    
        

    });
});