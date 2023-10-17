

describe('css',()=>
{
    // it('positive',()=>{
    //     cy.visit('https://ebs.oss.net.bd/login');
    // cy.get('a.btn.btn-primary.ebs-login').click();
     
    // })

    it('positive',()=>{
        cy.visit("https://www.amazon.com/");
    cy.get("input#twotabsearchtextbox").type("iphone");
    cy.get("input#nav-search-submit-button").click();
    cy.get("a[aria-label='0 items in cart']").click();
    
    //.type("mobiles");
    // cy.get("button[type='submit']").click();
    // Cypress.config('defaultCommandTimeout', 10000);
    
     //cy.get("span#glow-ingress-line1").contains("Deliver to");
     
     
    })
   

    
});