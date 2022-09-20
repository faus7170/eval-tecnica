/// <reference types="cypress" />

import { task } from "../../support/tasks/task"
import { home } from "../../support/ui/home"
//import { url } from "../../support/ui/url"

context('Test1-purchase', () => {
    let task1
    let homCall 
   
    beforeEach(() => {
        task1 =  new task()
        homCall= new home()
        cy.fixture('datapurchase.json').as('customers')
    })
  
    it('addproduct - Add product to cart', () => {
        task1.visit(homCall.url())
        task1.addProduct(homCall.prod1(),homCall.addToCar(),homCall.proddAddConf())
        task1.pathShop(homCall.navlink(),homCall.linkcart(),500)
        task1.pathShop(homCall.navlink(),homCall.linkhome(),500)
        task1.addProduct(homCall.prod2(),homCall.addToCar(),homCall.proddAddConf())
        task1.pathShop(homCall.navlink(),homCall.linkcart(),1500)
    })
 
    
    it('shop - Checkout', () => {
        task1.visit(homCall.url())
        task1.pathShop(homCall.navlink(),homCall.linkcart(),1500)
        cy.get(homCall.btnsucces()).click()
        cy.wait(1500)
        cy.get('@customers').then((customers) => {
            const client = customers    
            task1.shopProduct(client)
        })
        cy.get(homCall.btn()).contains('Purchase').click()
        cy.contains('Thank you for your purchase!').should('contain.text','Thank you for your purchase!')
    })
   
})  