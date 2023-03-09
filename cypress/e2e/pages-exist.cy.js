/// <reference types="cypress" />

describe('Navigate through myn website', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://develop.site.myn.co.uk/')
  })

  it('should show the employers and contractors pages', () => {
    cy.contains('Employers').click()
    cy.contains('The temporary staff platform')
  })

});