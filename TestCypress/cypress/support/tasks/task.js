 export class task
{
    constructor(){

    }
    visit(url){
        cy.visit(url)
        cy.wait(500)
    }
      addProduct(product,bnt,msg){
        cy.contains(product).click() 
        cy.contains(bnt).click() 
        cy.wait(500)
        cy.on("window:confirm", (t) => {
            expect(t).to.equal(msg);
         });
         
    }
    shopProduct(client){
            cy.get("#name").type(client.name);
            cy.get("#country").type(client.country);
            cy.get("#city").type(client.city);
            cy.get("#card").type(client.card);
            cy.get("#month").type(client.month);
            cy.get("#year").type(client.year);
       
    }
    pathShop(clas,context,delay){
        cy.get(clas).contains(context).click()
        cy.wait(delay)
    }


}
