describe('Default layout', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('contains h1 with "iskanderbroere" in nav', () => {
    cy.get('div > nav > h1').should('contain', 'iskanderbroere')
  })

  describe('contains navigation icons', () => {
    beforeEach(() => {
      cy.get('nav')
        .find('a')
        .as('navigationLinks')
    })
    it('contains a link to github', () => {
      cy.get('@navigationLinks')
        .contains('a', 'github')
        .should('have.prop', 'href', 'https://github.com/iskanderbroere/')
    })
    it('contains a link to linkedin', () => {
      cy.get('@navigationLinks')
        .contains('a', 'linkedin')
        .should(
          'have.prop',
          'href',
          'https://www.linkedin.com/in/iskander-broere-51065615b/'
        )
    })
    it('contains a link to projects', () => {
      cy.get('@navigationLinks')
        .contains('a', 'Projects')
        .should('have.prop', 'pathname', '/projects')
    })
    it('links to projects correctly', () => {
      cy.get('@navigationLinks')
        .contains('a', 'Projects')
        .click()
      cy.location('pathname').should('include', 'projects')
      cy.title().should('include', 'Projects')
      cy.go('back')
      cy.location('pathname').should('not.include', 'projects')
      cy.title().should('not.include', 'Projects')
    })
  })
})
