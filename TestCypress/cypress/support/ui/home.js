export class home{
    constructor(){

    }
    visit(){
        cy.visit("https://www.demoblaze.com/index.html")
        cy.wait(500)
    }
    prod1(){
        
        return "Samsung galaxy s6"
    }
    prod2(){
        return "Samsung galaxy s6"
    }
    addToCar(){
        return "Add to cart"
    }
    proddAddConf(){
        return "Product added"
    }

}