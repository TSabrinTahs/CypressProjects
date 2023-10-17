
///Jahid Hasan

describe('myalert', ()=>{

    

    it.skip('dropdown with selector',()=>{

        cy.visit('https://ebs.oss.net.bd/');
        cy.get(".btn.btn-primary.ebs-login").click();
        cy.get('#username').type("sabrin@ba-systems.com");
        cy.get('#password').type("SAT@#!%nrin");
        cy.get("#kc-login").click();




cy.get('.wrapper');
cy.get('aside') 
.find('.slimScrollDiv') 
.find('ul')
.find('li')
.find('span')
.contains('CRM')
.click();       
        
cy.get('a')
.contains('Lead')
.click();


cy.get('#search')
.click();


cy.on('window:alert',(t)=>{
    expect(t).to.contains('No Data');

});     

    });


    ////confirmation alert when OK


    it(' confirm alerts with OK', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm');   
    
    }) // in cypress it will automatically click Ok button

    cy.get('#result').should('have.text', 'You clicked: Ok');

    
});


//confirmation alert when cancel

it('js prompt alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.window().then((win)=>{   //by this function confirm which will be input in prompt box and we define before clicking the button
        cy.stub(win,'prompt').returns('Welcome');
    });


    cy.get("button[onclick='jsPrompt()']").click(); //cypress by default work the ok button in prompt 
    cy.get('#result').should('have.text', 'You entered: Welcome'); 


});


//alert with prompt box

it.only(' Authentication alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/basic_auth', 
                                                            { auth: 
                                                                {
                                                                username:"admin", 
                                                                password:"admin"
                                                                }
                                                            }   );

    cy.get("div[class='example'] p").should('have.contain', 'Congratulations!');

    //another way to authentication
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations!');

   
    


});



    
});