//import login from "../projectObject/login.js"
import login2 from "../projectObject/login2.js"

describe('object model pattern',()=>{

    it('omp1',()=>{
        cy.visit('https://ebs.oss.net.bd/');
        cy.visit('https://ebs.oss.net.bd/');
        cy.get(".btn.btn-primary.ebs-login").click();
        cy.get('#username').type(data.email);
        cy.get('#password').type(data.password);
        cy.get("#kc-login").click();
        cy.get('.navbar-header.header-caption')
        .should('have.text', data.expected);//expected will come from json file
        //



    });//it ends

//using page object class creating in login.js file under projectObject folder
    it('omp1',()=>{
        cy.visit('https://ebs.oss.net.bd/');
        
const ln =new login();
ln.setLoginOption();
ln. setUsernaem("sabrin@batworld.com");
ln.setEmailSubmit();
ln.setPassword("s@brin1789");
ln.setPasswordSubmit();
ln.verifyLogin();


    });//it ends

    it('omp2',()=>{
        cy.visit('https://ebs.oss.net.bd/');
        
const ln =new login2();
ln.setLoginOption();
ln. setUsernaem("sabrin@batworld.com");
ln.setEmailSubmit();
ln.setPassword("s@brin1789");
ln.setPasswordSubmit();
ln.verifyLogin();


    });//it ends

    it.only('omp3',()=>{
        cy.visit('https://ebs.oss.net.bd/');
        cy.fixture('EBS.json').then('data',()=>{
            const lnf =new login2();
            lnf.setLoginOption();
            lnf. setUsernaem(data.email);
            lnf.setEmailSubmit();
            lnf.setPassword(data.password);
            lnf.setPasswordSubmit();
            lnf.verifyLogin();

        });
        



    });//it ends


});




