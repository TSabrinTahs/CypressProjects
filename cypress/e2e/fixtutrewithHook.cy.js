

describe('fixture & Hook',()=>{

let userdata;
    before(()=>{ // it will be executed before executing it block
        cy.fixture('EBS.json').then((data)=>{
            userdata=data;
        });;//then ends
    });//before ends

    it('fix',()=>{

        cy.visit('https://ebs.oss.net.bd/');
        cy.get(".btn.btn-primary.ebs-login").click();
        cy.get('#username').type(userdata.email);//emiail will come from json file

        cy.get('#password').type(userdata.password);//password will come from json file

        cy.get("#kc-login").click();
    cy.get('.navbar-header.header-caption')
    .should('have.text', userdata.expected);//expected will come from json file


    });

});