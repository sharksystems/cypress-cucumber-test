export default class PostFeed {

    clickYourFeedTab() {
        cy.xpath("//a[contains(.,'Your Feed')]").click();
    }
    clickGlobalFeedTab() {
        cy.xpath("//a[contains(.,'Global Feed')]").click();
    }
    clickMyArticlesTab() {
        cy.xpath("//a[contains(.,'My Articles')]").click();
    }
    clickFavoritedArticlesTab() {
        cy.xpath("//a[contains(.,'Favorited Articles')]").click();
    }
    assertNoPostsDisplayed() {
        cy.wait(500);
        cy.xpath("//div[contains(text(), 'No articles are here... yet.')]").should('be.visible');
    }
    assertPostIsDisplayedByAuthor(author) {
        cy.wait(500);
        cy.xpath(`//div[@class='article-preview']//a[contains(.,'${author}')]`).should('be.visible');
    }
    clickPostAuthor(author) {
        cy.xpath(`(//a[contains(.,'${author}')])[1]`).click();
    }
    clickPostByAuthor(author) {
        cy.xpath(`//div[@class='article-preview' and contains(.,'${author}')][1]//a[@class='preview-link']`).click();
    }
    clickPostByTitle(title) {
        cy.xpath(`//div[@class = 'article-preview']//h1[contains(.,'${title}')]`).click();
    }
    likePostByTitle(title) {
        cy.xpath(`//div[@class = 'article-preview' and contains(.,'${title}')]//button`).click();
    }
    getLikeCountByTitle(title) {
        return cy.xpath(`//div[@class = 'article-preview' and contains(.,'${title}')]//button`)
            .invoke('text')
            .then(text => parseInt(text));
    }
    likeAndVerifyCountIncrement(title) {
        this.getLikeCountByTitle(title).then(initialCount => {
            this.likePostByTitle(title);
            this.getLikeCountByTitle(title).should('equal', initialCount + 1);
        });
    }
    removeLikeAndVerifyCountDecrement(title) {
        this.getLikeCountByTitle(title).then(initialCount => {
            this.likePostByTitle(title);
            this.getLikeCountByTitle(title).should('equal', initialCount - 1);
        });
    }
}