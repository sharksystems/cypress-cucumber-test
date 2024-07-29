export default class BasePage {
    clickSignInBtn() {
        cy.xpath("//a[contains(.,'Sign in')]").click();
    }
    clickSignUpBtn() {
        cy.xpath("//a[contains(.,'Sign up')]").click();
    }
    clickHomeBtn() {
        cy.xpath("//a[contains(.,'Home')]").click();
    }
    clickProfileBtn() {
        cy.get("a:has(img.user-pic)").click();
    }
    clickNewPostBtn() {
        cy.get("a:has(i.ion-compose)").click();
    }
    clickSettingsBtn() {
        cy.get("a:has(i.ion-gear-a)").click();
    }

    assertLoggedInAs(username) {
        cy.xpath(`//a[@href='/profile/${username}']`).should('be.visible');
    }
    assertSignInBtnVisible() {
        cy.xpath("//a[contains(.,'Sign up')]").should('be.visible');
    }

    visit(page) {
        cy.visit(`https://conduit.realworld.how/${page}`)
    }
}