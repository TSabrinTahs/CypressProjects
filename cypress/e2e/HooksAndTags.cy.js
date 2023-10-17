
// before
//after
//beforeEach
//afterEach

describe('my test',()=>{


    before(()=>{

        cy.log('****Launch App****'); /// it will execute before executing all it block

    });

    after(()=>{

        cy.log('****Close App****'); /// it will execute after executing all it block
        
    })


    beforeEach(()=>{

        cy.log('****Log in****'); /// it will execute before executing each it block

    });

    afterEach(()=>{

        cy.log('****Log out****');  /// it will execute after executing each it block
        
    })


it('search', ()=>{



});// it ends


it('advancesearch', ()=>{


    
});//it ends


it('productList', ()=>{


    
});//it ends

});