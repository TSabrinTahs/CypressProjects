class login2{
    loginArea=".btn.btn-primary.ebs-login";
    emailArea="#email";
    emailSubmit="#next_btn";
    passArea="#password";
    passSubmit="#login_btn";
    verifyArea=".navbar-header.header-caption";

    setLoginOption(){
        cy.get(this.loginArea).click();
    }


    setUsernaem(username){
    cy.get(this.emailArea).type(username);
        
    }//

    setEmailSubmit(){
        cy.get(this.emailSubmit).click();
    }

    setPassword(password){
        cy.get(this.passArea).type(password);
    }

    setPasswordSubmit(){
        cy.get(this.passSubmit).click();

    }
 verifyLogin(){
    cy.get(this.verifyArea)
    .should('have.text', "Business Automation Ltd");
 }


}//class ends

export default login2;