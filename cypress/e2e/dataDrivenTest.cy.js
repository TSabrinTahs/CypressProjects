

describe('LogIn test',()=>{

    it.skip('data driven',()=>{
cy.fixture('Login.json').then((data)=>{

    cy.visit('https://ebs.oss.net.bd/');

    data.forEach((userdata) => {
        cy.get(".btn.btn-primary.ebs-login").click();
        cy.get("#email").type(userdata.email); //email will come from json file
        cy.get('#next_btn').click();
        cy.get("#password").type(userdata.password);//password will come from json file
        cy.get('#login_btn').click();

        if(userdata.email=="sabrin@batworld.com" && userdata.password=="s@brin1789"){

       
        cy.get('.navbar-header.header-caption')
        .should('have.text', userdata.expected);//expected will come from json file    
        cy.get("span[class='hidden-xs']").click();
        cy.get("body > div:nth-child(2) > header:nth-child(1) > nav:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > div:nth-child(2) > a:nth-child(1)")
        .click();


        }


    }); //forEach ends

});//fixture ends


    });// it ends







it.only('data driven2',()=>{
    cy.fixture('Login.json').then((data)=>{
    
        
    
        data.forEach((userdata) => {
            cy.visit('https://ebs.oss.net.bd/');
            cy.get(".btn.btn-primary.ebs-login").click();
            cy.get("#email").type(userdata.email); //email will come from json file
            cy.get('#next_btn').click();
            if(userdata.email=="sabrin@batworld.com"){
                cy.get("#password").type(userdata.password);//password will come from json file
                cy.get('#login_btn').click();
                    if(userdata.password=='s@brin1789'){
                    cy.get('.navbar-header.header-caption')
                    .should('have.text', userdata.expected);//expected will come from json file    
                    cy.get("span[class='hidden-xs']").click();
                    cy.get("body > div:nth-child(2) > header:nth-child(1) > nav:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > div:nth-child(2) > a:nth-child(1)")
                    .click();

                    }// 2nd if ends
                    else{
                            
                        cy.get('.validation_message.text-danger')
                        .should('have.text', userdata.expected);
                    }
            
            }// 1st if ends
            
            
            else {
                cy.get('.validation_message.text-danger')
                .should('have.text',userdata.expected);
    
            }
    
    
    
        }); //forEach ends
    
    });//fixture ends
    
    
        });// it ends





        it.skip('data driven3',()=>{
        
            
                cy.visit('https://ebs.oss.net.bd/');
            
               
                    cy.get(".btn.btn-primary.ebs-login").click();
                    cy.get("#email").type('sabrin@batworld.com'); //email will come from json file
                    cy.get('#next_btn').click();
                    cy.get("#password").type('s@brin178');//password will come from json file
                    cy.get('#login_btn').click();
                    
                    // cy.get('.validation_message.text-danger')
                    // .should('have.text', 'Please enter valid email address.');
                    
            
            
                }); // it ends

    }); //describe ends



    

   

    