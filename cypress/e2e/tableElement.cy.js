

describe('Handle Table',()=>{


  beforeEach(()=>{
    cy.visit('https://ebs.oss.net.bd/');
    cy.get(".btn.btn-primary.ebs-login").click();
    cy.get('#username').type("sabrin@ba-systems.com");
    cy.get('#password').type("SAT@#!%nrin");
    cy.get("#kc-login").click();

    cy.get('.wrapper');
cy.get('aside') 
.find('.slimScrollDiv') 
.find('ul')
.find('li')
.find('span')
.contains('Projects')
.click();       
    

cy.get('.sidebar-menu.tree');
cy.get('.treeview') 
.find('ul')
.find('li')
.find('a')
.find('span')
.contains('Activity Log')
.click();
  });


    it('check numbers of rows & columns',()=>{
        cy.get("#list>tbody>tr").should('have.length', '10');
        cy.get("table[role='grid']>thead>tr>th").should('have.length', '8');
    });//it ends

    it('check all the data in rows & columns',()=>{
        cy.get("tbody tr:nth-child(2) td:nth-child(2)").should('have.text','Team meeting');
        cy.get("tbody tr:nth-child(2) td:nth-child(2)").contains('Team meeting');
    });//it ends


    it('read all the data in rows & columns',()=>{
        cy.get("#list>tbody>tr")// getting 10 rows
        .each(($row, $index, $rows)=>{ // getting each row between 10 rows
            cy.wrap($row).within(()=>{ 
                cy.get('td')// getting 8 columns
                .each(($col, $index, $cols)=>{ // getting each column between 8 columns
                    cy.log($col.text()); 
                })

            })

        });

    });//it ends

    it.only('pagination',()=>{
        //let totalpages;
    
        //find total number of pages
    cy.get("#list_info").should('have.text', 'Showing 1 to 10 of 166 entries' );    
    cy.get("#list_info").then((e)=>{  //passing the elemnet #list_info in then method
        let mytext=e.text(); //get the text in #list_info element
        cy.log(mytext); // print the text
        var t1= mytext.indexOf('of')+2; // finding the specific index to use in the substring method 
        var t2= mytext.indexOf('entries')-1; // finding the specific index to use in the substring method 
        cy.log(t1); //index print
        cy.log(t2); //index print
        let totalpages=mytext.substring(t1, t2); //get the specific substring of the text
        cy.log("The total number of pages is", totalpages); // print the numbe



         
        let numberOFPagination= parseInt(totalpages/10);
        if(totalpages%10>0&&totalpages%10<10 ){
            numberOFPagination= parseInt(totalpages/10)+1;
        }
        cy.log("The number of pagination is", numberOFPagination);

        for(let p=1;p<10; p++){
            // cy.get("ul.pagination");
            // cy.log(p);

            cy.get("body div div div li:nth-child("+p+")>a").then((f)=>{
                let num= f.text();
                cy.log("for"+p+" number page: ",num);
               });

               cy.get("body div div div li:nth-child("+p+")>a").click();
               cy.wait(3000);

        }//for ends

        
        
       
 });//then function ends

    });//it ends


  


         
       

});// describe ends