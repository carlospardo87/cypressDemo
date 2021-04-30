/// <reference types="cypress" />

var using = require('jasmine-data-provider');



using(

  [
    { user: "carlos", pass: 12345, title: "first user"},
    { user: "carlos1", pass: 123456, title: "second user"}
  ],

  (data) => {


    it(`Purchase flow - ${data.title}`, () => {

      const btnAddToCar = 'a[title="Add to cart"]'

      cy.visit('http://automationpractice.com/index.php')

      console.log("click on the home page")
      cy.get(btnAddToCar).eq(0).click()

      console.log("click on the reserve page")
      cy.get('.button-medium > span').click()

      console.info("Fill first Last")
      cy.get('.cart_navigation > .button > span').click()

      cy.get('#email').type(data.user)

      cy.get('#passwd').type(data.pass)

      cy.get('.page-heading').should('contain', 'Authentication')


    })
  })

