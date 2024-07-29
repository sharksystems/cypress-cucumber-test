import BasePage from './BasePage.js';

export default class RegistrationPage extends BasePage {
    enterUsername(username) {
        cy.xpath("//input[@name='username']").type(username);
    }
    enterEmail(email) {
        cy.xpath("//input[@name='email']").type(email);
    }
    enterPassword(password) {
        cy.xpath("//input[@name='password']").type(password);
    }
    clickRegisterSubmitBtn() {
        cy.xpath("//button[contains(.,'Sign up')]").click();
    }
    registerUser(username, email, password) {
        this.enterUsername(username);
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickRegisterSubmitBtn();
    }

    assertEmailTakenErrorMsg() {
        cy.xpath("//li[contains (.,'email has already been taken')]").should('be.visible');
    }
    assertUsernameTakenErrorMsg() {
        cy.xpath("//li[contains (.,'username has already been taken')]").should('be.visible');
    }
}