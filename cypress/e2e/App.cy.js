/* eslint-disable no-undef */
describe('Home Page', () => {
  it('functinality ok', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[alt="flor foto"]').should('be.visible')
    cy.get('[src="/health.png"]').should('be.visible')
    cy.get(':nth-child(1) > img').should('be.visible')
    cy.get(':nth-child(2) > img').should('be.visible')
    cy.get(':nth-child(3) > img').should('be.visible')
    cy.get(':nth-child(4) > img').should('be.visible')
    cy.get(':nth-child(5) > img').should('be.visible')
    cy.get(':nth-child(6) > img').should('be.visible')
    cy.get(':nth-child(7) > img').should('be.visible')
    cy.get(':nth-child(8) > img').should('be.visible')
  })

  it('Consulta online', () => {
    cy.visit('http://127.0.0.1:5173/consulta-online')
    cy.get('.bg-black').contains('Solicitar Consulta').click()
    cy.get('[data-aria-label="telefono-error"]').should('be.visible')
  })
})
