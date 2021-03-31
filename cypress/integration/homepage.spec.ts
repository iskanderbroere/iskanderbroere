describe("Homepage", function () {
  before(function () {
    cy.visit("/")
  })
  it("renders nav title", function () {
    cy.findByText("iskanderbroere").should("exist")
  })
  it("renders work link", function () {
    cy.findByText("Software Bastards")
      .should("have.prop", "href", "https://www.softwarebastards.nl/")
      .should("have.prop", "target", "_blank")
  })
})
