


describe('browsNav',()=>{
    it('nav',()=>{
        cy.visit('https://www.ba-systems.com/');
        cy.title().should('eq','Business Automation Ltd');

        cy.get('#ba-mainNavber')
        .find('ul')
        .find('li')
        .contains('Career')
        .click();

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(2) > strong:nth-child(1)")
        .should('have.text', 'Career');

        cy.go('back');
        cy.title().should('eq','Business Automation Ltd');

        cy.go('forward');
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(2) > strong:nth-child(1)")
        .should('have.text', 'Career');


        cy.go(-1);//alternative of back
        cy.title().should('eq','Business Automation Ltd');

        cy.go(1);//alternative of forward
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(2) > strong:nth-child(1)")
        .should('have.text', 'Career');

        cy.reload();




    });


});