/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 10000);
describe('Navigate through job board', () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://develop.site.myn.co.uk/jobs')
  })

  it('Should land on the job spec page', () => {
    cy.contains('Full details').click()
    cy.url().should('include', '/jobs/job/') 
    cy.contains('Apply').click()
    cy.get("[name=firstName]").type("Keith")
    cy.get("[name=lastName]").type("Moon")
    cy.get("[name=email]").type("someone@example.com")
    cy.get("[name=password]").type("Password_1$")
  })

});