import PostFeed from '../page_elements/PostFeed.js';
import BasePage from './BasePage.js';

export default class ProfilePage extends BasePage {
    constructor() {
        super();
        this.postFeed = new PostFeed();
    }

    clickEditProfileBtn() {
        cy.xpath("//a[contains(.,'Edit Profile Settings')]").click();
    }
    clickFavoritedArticlesTab() {
        this.postFeed.clickFavoritedArticlesTab();
    }
    clickMyArticlesTab() {
        this.postFeed.clickMyArticlesTab();
    }
    clickFollowBtn() {
        cy.get('i.ion-plus-round').click();
        cy.wait(500);
    }
    assertNoPostsDisplayed() {
        this.postFeed.assertNoPostsDisplayed();
    }
    clickPostByTitle(title) {
        this.postFeed.clickPostByTitle(title);
        cy.wait(1000);
    }
    removeLikeFromPostByTitleAndVerify(title) {
        this.postFeed.removeLikeAndVerifyCountDecrement(title);
    }
}