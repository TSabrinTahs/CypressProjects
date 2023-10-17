

describe('custom commands', ()=>{

    it('handling links',()=>{
        cy.visit('https://ebs.oss.net.bd/login');
        cy.clickLink("Enterprise Business Solution");

      

    })// it ends

    it.skip('overwriteQuery',()=>{

        cy.visit('https://ebs.oss.net.bd/login');
        cy.clickLink("Enterprise Business Solution");

    })// it ends

    it.only('login',()=>{
        cy.visit('https://ebs.oss.net.bd/login');
        cy.get('.btn.btn-primary.ebs-login').click();
        cy.Login('#email','sabrin@batworld.com', '#next_btn', '#password', 's@brin1789', '#login_btn');

    })// it ends



}); // describe ends