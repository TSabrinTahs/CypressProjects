describe('screenshots & video',()=>{

it('capture', ()=>{
    cy.visit('https://ba-systems.com/');
    //cy.screenshot('homepage');
    /*cy.wait(5000);
    cy.get("button[aria-label='submit_btn'] span").screenshot('icon');*/



    //Automatically screenshots when failure

    cy.get('#ba-mainNavber>ul>li')
    .contains(' Contact Us')
    .click();
    cy.title().should('eq', 'Cont | Business Automation Ltd.');// this will fail
    //command to take automatically screen shot and vidos when fail
    //npx cypress run --spec path
    //npx cypress run --spec 


})


});