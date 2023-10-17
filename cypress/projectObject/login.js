class login{

    setLoginOption(){
        cy.get(".btn.btn-primary.ebs-login").click();
    }


    setUsernaem(username){
    cy.get("#email").type(username);
        
    }//

    setEmailSubmit(){
        cy.get('#next_btn').click();
    }

    setPassword(password){
        cy.get("#password").type(password);
    }

    setPasswordSubmit(){
        cy.get('#login_btn').click();

    }
 verifyLogin(){
    cy.get('.navbar-header.header-caption')
    .should('have.text', "Business Automation Ltd");
 }


}//class ends

export default login;