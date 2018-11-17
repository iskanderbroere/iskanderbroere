/// <reference types="Cypress" />

context("Default layout", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it('contains h1 with "iskanderbroere" in nav', () => {
    cy.get("nav > h1").should("contain", "iskanderbroere")
  })

  describe("contains navigation icons", () => {
    beforeEach(() => {
      cy.get("nav")
        .find('[class^="navicons"] > a')
        .as("navigationLinks")
    })
    it("contains a link to github", () => {
      cy.get("@navigationLinks")
        .contains("a", "github")
        .should("have.prop", "href", "https://github.com/iskanderbroere/")
    })
    it("contains a link to linkedin", () => {
      cy.get("@navigationLinks")
        .contains("a", "linkedin")
        .should(
          "have.prop",
          "href",
          "https://www.linkedin.com/in/iskander-broere-51065615b/"
        )
        .should("not.have.prop", "rel", "noopener noreferrer")
    })
    it("contains a link to projects", () => {
      cy.get("@navigationLinks")
        .contains("a", "Projects")
        .should("have.prop", "pathname", "/projects")
        .should("not.have.prop", "rel", "noopener noreferrer")
    })
  })

  // it("cy.go() - go back or forward in the browser's history", () => {
  //   // https://on.cypress.io/go

  //   cy.location('pathname').should('include', 'navigation')

  //   cy.go('back')
  //   cy.location('pathname').should('not.include', 'navigation')

  //   cy.go('forward')
  //   cy.location('pathname').should('include', 'navigation')

  //   // clicking back
  //   cy.go(-1)
  //   cy.location('pathname').should('not.include', 'navigation')

  //   // clicking forward
  //   cy.go(1)
  //   cy.location('pathname').should('include', 'navigation')
  // })

  // it('cy.reload() - reload the page', () => {
  //   // https://on.cypress.io/reload
  //   cy.reload()

  //   // reload the page without using the cache
  //   cy.reload(true)
  // })

  // it('cy.visit() - visit a remote url', () => {
  //   // https://on.cypress.io/visit

  //   // Visit any sub-domain of your current domain

  //   // Pass options to the visit
  //   cy.visit('https://example.cypress.io/commands/navigation', {
  //     timeout: 50000, // increase total time for the visit to resolve
  //     onBeforeLoad(contentWindow) {
  //       // contentWindow is the remote page's window object
  //       expect(typeof contentWindow === 'object').to.be.true
  //     },
  //     onLoad(contentWindow) {
  //       // contentWindow is the remote page's window object
  //       expect(typeof contentWindow === 'object').to.be.true
  //     }
  //   })
  // })
})
