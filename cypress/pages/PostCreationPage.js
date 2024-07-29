import BasePage from './BasePage.js';

export default class PostCreationPage extends BasePage {

    enterPostTitle(title) {
        cy.get("input[name='articleTitle']").clear().type(title);
    }
    enterPostSummary(summary) {
        cy.get("input[name='description']").clear().type(summary);
    }
    enterPostContent(content) {
        cy.get("textarea[name='body']").clear().type(content);
    }
    clickPostSubmitBtn() {
        cy.get("button.btn-lg").click();
        cy.wait(1000);
    }
    createPost(title, summary, content) {
        this.enterPostTitle(title);
        this.enterPostSummary(summary);
        this.enterPostContent(content);
        this.clickPostSubmitBtn();
    }
}