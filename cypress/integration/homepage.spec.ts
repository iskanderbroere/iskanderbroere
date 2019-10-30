describe("Homepage", function() {
  before(function() {
    cy.visit("/")
  })
  it("renders nav title", function() {
    cy.findByText("iskanderbroere").should("exist")
  })
  it("renders mailto link", function() {
    cy.findByText("iskanderbroere@gmail.com").should(
      "have.prop",
      "href",
      "mailto:iskanderbroere@gmail.com"
    )
  })
  it("renders work link", function() {
    cy.findByText("Frontmen")
      .should("have.prop", "href", "https://www.frontmen.nl/")
      .should("have.prop", "target", "_blank")
  })
})
