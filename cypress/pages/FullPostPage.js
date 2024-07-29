import BasePage from './BasePage.js';

export default class FullPostPage extends BasePage {
    clickDeletePostBtn() {
        cy.get("button.btn-outline-danger").click();
    }
    clickEditPostBtn() {
        cy.get("a.btn-outline-secondary").click();
    }
    assertPostTitle(title) {
        cy.xpath(`//h1[contains(.,'${title}')]`).should('be.visible');
    }
    assertPostSummary(summary) {
        cy.xpath(`//p[contains(.,'${summary}')]`).should('be.visible');
    }
    assertPostContent(content) {
        cy.xpath(`//p[contains(.,'${content}')]`).should('be.visible');
    }
    verifyPostContents(title, summary, content) {
        this.assertPostTitle(title);
        this.assertPostSummary(summary);
        this.assertPostContent(content);
    }
    clickFollowBtn() {
        cy.get('i.ion-plus-round').click();
        cy.wait(500);
    }
}