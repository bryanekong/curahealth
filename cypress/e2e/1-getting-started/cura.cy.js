/// <reference types="cypress" />

describe('visit Cura Healthcare', () => {
  beforeEach(() => {
   
    cy.visit('https://katalon-demo-cura.herokuapp.com')
  })

  it('should test valid  logon', () => {
    //This test is to test for valid logon details(valid username and password)

    cy.get('#menu-toggle > .fa').click()
    cy.get('.sidebar-nav > :nth-child(4) > a').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()

    //The next line is to verify if the user logged in successfully
     
    cy.contains('Make Appointment')
})    

it('should test invalid  logon', () => {
//This test is to test for invalid login details(valid username and invalid password)

cy.get('#menu-toggle > .fa').click()
cy.get('.sidebar-nav > :nth-child(4) > a').click()
cy.get('#txt-username').type('John Doe')
cy.get('#txt-password').type('ThisIsAWrongPassword')
cy.get('#btn-login').click()

//The next line is to verify that the user is unable to login successfully and an error message displayed
 
cy.contains('Login failed! Please ensure the username and password are valid')
})

it('make an Appointment', () => {
//This test is to test for making appointment

cy.get('#menu-toggle > .fa').click()
cy.get('.sidebar-nav > :nth-child(4) > a').click()
cy.get('#txt-username').type('John Doe')
cy.get('#txt-password').type('ThisIsNotAPassword')
cy.get('#btn-login').click()

//The next line is to verify if the user logged in successfully
 
cy.contains('Make Appointment')

//The next lines are to book appointment

cy.get('#chk_hospotal_readmission').click()
cy.get('.glyphicon').click()
cy.get('tbody > :nth-child(3) > :nth-child(6)').click()
cy.get(':nth-child(5) > .col-sm-offset-3').dblclick().type('this is a test comment')
cy.get('#btn-book-appointment').click()

//The next line is to confirm the appointment was booked

cy.contains('Appointment Confirmation')

})

})