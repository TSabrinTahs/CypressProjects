//const { describe } = require("mocha");

//const { expect } = require("chai");


describe('assertion1',()=>{

it('Implicit Assertion',()=>{
    cy.visit("https://ebs.oss.net.bd/login");

    cy.url().should('include','ebs.oss.net') //check that the part of the url
    .and('not.eq','https://amazon.com') // check that the url is right 
    .and('not.contain','amazan.com');


    cy.title().should('include', 'EBS of Business Automation Ltd.')
    .should('not.include','orangeHRM');



         cy.get("a.site-logo>img").should('be.visible').and('exist');

        cy.xpath("//a").should('have.length',61); 
        cy.visit("https://id.oss.net.bd/osspid-client/auth?client_id=284124b1ec3736ef3d7fae617a4b8996f7fbbe53&cs=MzQ1ZDY0MmJlN2RlMDJhZTY2MWMyYjA2OTBlYWZhYjllYWNkMzI4MTo6G-5USpg31YbVX1WvPcpPMg&callback_url=https://ebs.oss.net.bd/osspid-callback");
        cy.get("div[class='login-panel-body'] div input[type='text']").type('sabrin@batworld.com');
        cy.get("div[class='login-panel-body'] div input[type='text']").should('have.value','sabrin@batworld.com');


       




})
});


describe('Assertion2', ()=>{
    it('Explicit Assertin',()=>{


        cy.visit("https://id.oss.net.bd/osspid-client/auth?client_id=284124b1ec3736ef3d7fae617a4b8996f7fbbe53&cs=MzQ1ZDY0MmJlN2RlMDJhZTY2MWMyYjA2OTBlYWZhYjllYWNkMzI4MTo6G-5USpg31YbVX1WvPcpPMg&callback_url=https://ebs.oss.net.bd/osspid-callback");
        cy.get("div[class='login-panel-body'] div input[type='text']").type('sabrin@batworld.com');
        cy.get("button#next_btn").click();
        cy.get('input#password').type('s@brin1789');
        cy.get("button#login_btn").click();

       //user name
        var expectedName="Tahsina Sabrin";
        cy.get("span[class='hidden-xs']").then=(X)=>{
            var actualName=x.text();

            //BDD  assertion
            expect(actualName).to.equal(expectedName);
            expect(actualName).to.not.equal(expectedName);

            //TDD assertion
            assert.equal(actualName,expectedName);
        }

        //title
        var expectedTitle="Tahsina";

        cy.get("div.navbar-header.header-caption").then((x)=>{

            var actualTitle=x.text();


            //BDD  assertion
            
            expect(actualTitle).to.equal(expectedTitle);
            expect(actualTitle).to.not.equal(expectedTitle);

            //TDD assertion
            assert.equal(actualTitle,expectedTitle);

        })





    })//ending of it 2




});// ending of describe w






