//import 'cypress-file-upload';

describe('file upload',()=>{

it('single file upload', ()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').selectFile('test.pdf');
    cy.get('#file-submit').click();
    cy.get("div[class='example'] h3");

}); //it ends

it('file upload rename', ()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').selectFile({filepath:'test.pdf', fileName:'renamefile.pdf'});
    cy.get('#file-submit').click();
    cy.get("div[class='example'] h3");

}); //it ends


it.only('file upload rename', ()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get("#drag-drop-upload").selectFile("test.pdf", {subjectType:'drag-n-drop'});
    //cy.get("#flash-messages");
    //cy.get("div[class='example'] h3");

}); //it ends



});