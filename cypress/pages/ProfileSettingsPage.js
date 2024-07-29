import BasePage from './BasePage.js';

export default class ProfileSettingsPage extends BasePage {
    clickLogoutBtn() {
        cy.get("button.btn-outline-danger").click();
    }
}