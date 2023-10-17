

describe('fixtureDemo',()=>{


    it('fixture1',()=>{


    //at first need to create json file and keep ta data that will be passed
cy.fixture('EBS.json').then((data)=>{ // data will be passed from EBS.json file under fixture


    
    cy.visit('https://ebs.oss.net.bd/');
    cy.get(".btn.btn-primary.ebs-login").click();
    cy.get('#username').type(data.email);
    cy.get('#password').type(data.password);
    cy.get("#kc-login").click();
    cy.get('.navbar-header.header-caption')
    .should('have.text', data.expected);//expected will come from json file
    //


});// fixture ends
    }); //it ends



    it('fixture2',()=>{

    }); //it ends
});