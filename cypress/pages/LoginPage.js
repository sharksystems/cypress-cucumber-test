import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {
    enterEmail(email) {
        cy.get("input[name='email']").type(email);
    }
    enterPassword(password) {
        cy.get("input[name='password']").type(password);
    }
    clickLoginSubmitBtn() {
        cy.xpath("//button[contains(.,'Sign in')]").click();
    }
    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginSubmitBtn();
    }

    assertUsernameOrPasswordErrorMsg() {
        cy.xpath("//li[contains (.,'email or password is invalid')]").should('be.visible');
    }
}