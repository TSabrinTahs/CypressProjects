
// const cypress=require("cypress");
// const {it}=require("mocha");


describe('xpathloc',()=>{
    it('find number of products',()=>{
        cy.visit("https://ebs.oss.net.bd/login");
        cy.xpath("//div[@class='ebs-portal-logo']/div/a").should('have.length',16);
        cy.xpath("//div[@class='ebs-portals-logo-content flex-center']").should('have.length',1);

    })
});




////div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_16']//div[@class='a-section aok-relative s-image-fixed-height']/img
//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_16']//div[@class='a-section aok-relative s-image-fixed-height']/img