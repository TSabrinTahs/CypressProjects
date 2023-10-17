


describe('Automate ecommerce site',()=>{

    it('Test it',()=>{

        cy.visit("https://www.saucedemo.com/");
        cy.get("input[placeholder='Username']").type("standard_user");
        cy.get("input[placeholder='Password']").type("secret_sauce"); 
        cy.get("input[value='Login']").click();
        cy.get("div[class='bm-burger-button'] button");


    
            

    });//end of the it 


}); //end of the describe