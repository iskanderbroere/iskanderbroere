describe("Homepage", function () {
  before(function () {
    cy.visit("/")
  })
  it("renders nav title", function () {
    cy.findByText("iskanderbroere").should("exist")
  })
  it("renders work link", function () {
    cy.findByText("Frontmen")
      .should("have.prop", "href", "https://www.frontmen.nl/")
      .should("have.prop", "target", "_blank")
  })
})
