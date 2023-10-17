


describe('assertion1',()=>{

    it('checkBox',()=>{
        cy.visit("https://ebs.oss.net.bd/login");
    
        cy.url().should('include','ebs.oss.net') //check that the part of the url
        .and('not.eq','https://amazon.com') // check that the url is right 
        .and('not.contain','amazan.com');
    
    
        cy.title().should('include', 'EBS of Business Automation Ltd.')
        .should('not.include','orangeHRM');
    
    
    
             cy.get("a.site-logo>img").should('be.visible').and('exist');
    
            cy.xpath("//a").should('have.length',60); 
            //cy.get('a.btn.btn-primary.ebs-login').click();

            
            //a[href='https://id.oss.net.bd/osspid-client/auth?client_id=284124b1ec3736ef3d7fae617a4b8996f7fbbe53&cs=MzQ1ZDY0MmJlN2RlMDJhZTY2MWMyYjA2OTBlYWZhYjllYWNkMzI4MTo6ROFG2XA7DFaoxGI77w__RA&callback_url=https://ebs.oss.net.bd/osspid-callback']
            
            //cy.visit("https://id.oss.net.bd/osspid-client/auth?client_id=284124b1ec3736ef3d7fae617a4b8996f7fbbe53&cs=MzQ1ZDY0MmJlN2RlMDJhZTY2MWMyYjA2OTBlYWZhYjllYWNkMzI4MTo6G-5USpg31YbVX1WvPcpPMg&callback_url=https://ebs.oss.net.bd/osspid-callback");
            cy.visit('https://ebs.oss.net.bd/');
        cy.get(".btn.btn-primary.ebs-login").click();
        cy.get('#username').type("sabrin@ba-systems.com");
        cy.get('#password').type("SAT@#!%nrin");
        cy.get("#kc-login").click();

            //cy.get("a[href='https://ebs.oss.net.bd/project/activity-log']").click();
  
            
            //this is for issue tracker page
cy.get("a[href='https://ebs.oss.net.bd/issue/lists']").click();
cy.get("button[type='button'] b").click();

//visibility of radio button
cy.get("input[value='CR']").should('be.visible'); 
cy.get("input[value='Bug']").should('be.visible');
cy.get("input[value='To Do']").should('be.visible');
cy.get("input[value='Others']").should('be.visible');


//selecting radioButton
//in case of CR checked
cy.get("input[value='CR']").check().should('be.checked'); 
cy.get("input[value='Bug']").should('not.be.checked');
cy.get("input[value='To Do']").should('not.be.checked');
cy.get("input[value='Others']").should('not.be.checked');


//in case of Bug Checked
cy.get("input[value='Bug']").check().should('be.checked');
cy.get("input[value='CR']").should('not.be.checked'); 
cy.get("input[value='To Do']").should('not.be.checked');
cy.get("input[value='Others']").should('not.be.checked');

//in case of To do checked
cy.get("input[value='To Do']").check().should('be.checked');
cy.get("input[value='Bug']").should('not.be.checked');
cy.get("input[value='CR']").should('not.be.checked'); 
cy.get("input[value='Others']").should('not.be.checked');


//in case of Others checked
cy.get("input[value='Others'][name='type']").check().should('be.checked');
cy.get("input[value='CR']").should('not.be.checked');
cy.get("input[value='Bug']").should('not.be.checked');
cy.get("input[value='To Do']").should('not.be.checked');



           
           //dropdown

        //    cy.get("#select2-project_id-container").click();
        //    cy.get(".select2-results").click( "#select2-project_id-result-ll2b-185");

           


          
                                        

         
        
           

           
          
                                        
    
    
    
    
    })
    });
    
    
    // describe('Assertion2', ()=>{
    //     it('Explicit Assertin',()=>{
    
    
    //         cy.visit("https://id.oss.net.bd/osspid-client/auth?client_id=284124b1ec3736ef3d7fae617a4b8996f7fbbe53&cs=MzQ1ZDY0MmJlN2RlMDJhZTY2MWMyYjA2OTBlYWZhYjllYWNkMzI4MTo6G-5USpg31YbVX1WvPcpPMg&callback_url=https://ebs.oss.net.bd/osspid-callback");
    //         cy.get("div[class='login-panel-body'] div input[type='text']").type('sabrin@batworld.com');
    //         cy.get("button#next_btn").click();
    //         cy.get('input#password').type('s@brin1789');
    //         cy.get("button#login_btn").click();
    
          
    
    //        cy.xpath("//body/div[@class='wrapper']/aside[@class='main-sidebar']/div[@class='slimScrollDiv']/section[@class='sidebar']/ul[@class='sidebar-menu tree']/li[@class='treeview menu-open']/a[@href='#']/span[1]").click();
    
    
    
    
    //     })//ending of it 2
    
    
    
    
    // });// ending of describe w
    
    
    
    
    
    
    