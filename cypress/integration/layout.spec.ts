describe("Homepage", function () {
  before(function () {
    cy.visit("/")
  })
  it("renders nav title", function () {
    cy.findByText("Iskander Broere").should("exist")
  })
  it("renders mailto link", function () {
    cy.findByText("Projects").should("have.prop", "href", "/projects")
  })
  it("renders work link", function () {
    cy.findByText("GitHub")
      .should("have.prop", "href", "https://www.github.com/iskanderbroere")
      .should("have.prop", "target", "_blank")
  })
})
