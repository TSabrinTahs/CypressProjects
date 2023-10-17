describe('tabs',()=>{

    it.skip('approach1', ()=>{


       
            cy.visit('https://www.amazon.com/')
            cy.title().should('eq','Amazon.com. Spend less. Smile more.');
            cy.get('#navFooter');
           cy.get('#desktop-grid-6')
           .find('div');
           cy.get('a.a-link-normal _fluid-fat-image-link-v2_style_mergedLinks__10JqZ')
           //.invoke('removeAttr', 'target') // avoid to open the new window when the target is blank 
           .click();
    
            
    
           

    }); //it ends



    it('approach2', ()=>{
        cy.visit('https://ebs.oss.net.bd/');
        cy.get("a[href='https://www.ba-systems.com/']")
        .invoke('removeAttr', 'target') 
        .click();
        //cy.url().should('include','https://www.ba-systems.com/');
       cy.wait(5000);
        cy.go('back');
    

    }); //it ends


    it.only('approach3', ()=>{
        cy.visit('https://ebs.oss.net.bd/');
        cy.get("a[href='https://www.ba-systems.com/']").then((e)=>{
            let url=e.prop('href');
            cy.visit(url);
            
        }); //end the then function

    }); //it ends


    

});