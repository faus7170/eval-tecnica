/// <reference types="cypress" />

import { task } from "../../support/tasks/task"
import { home } from "../../support/ui/home"

context('Test1-purchase-error', () => {
    let task1
    let homCall 
   
    beforeEach(() => {
        task1 =  new task()
        homCall= new home()
        cy.visit("https://www.demoblaze.com/index.html")
        cy.fixture('datapurchase1.json').as('customers')
    })
  
    it('addproduct - Add product to cart', () => {
        task1.addProduct('Samsung galaxy s6','Add to cart',"Product added")
        task1.pathShop('.nav-link','Cart',500)
        task1.pathShop('.nav-link','Home',500)
        task1.addProduct("Nokia lumia 1520",'Add to cart',"Product added")
        task1.pathShop('.nav-link','Cart',1500)
    })
 
    it('shop - Checkout', () => {
        task1.pathShop('.nav-link','Cart',1500)
        cy.get('.btn-success').click()
        cy.wait(1500)
        cy.get('@customers').then((customers) => {
            cy.log(customers)
            const client = customers     
           // task1.shopProduct(client)
        })
        cy.get('.btn').contains('Purchase').click()
        
        cy.on("window:confirm", (t) => {
            expect(t).to.equal('Please fill out Name and Creditcard.');
            cy.contains('Please fill out Name and Creditcard.').should('Please fill out Name and Creditcard.')
         });
    })
})  