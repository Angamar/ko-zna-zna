describe("Navigation", () => {
  it("should navigate to Ko zna zna game mode", () => {
    // Start from the index page
    cy.visit("/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/ko-zna-zna"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/ko-zna-zna");

    //   // The new page should contain an h1 with "About page"
    //   cy.get('h1').contains('About Page')
  });
});