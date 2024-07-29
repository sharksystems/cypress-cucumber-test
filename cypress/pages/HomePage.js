import BasePage from './BasePage.js';
import PostFeed from '../page_elements/PostFeed.js';

export default class HomePage extends BasePage {

    constructor() {
        super();
        this.postFeed = new PostFeed();
    }
    likePostByTitle(title) {
        this.postFeed.likePostByTitle(title);
    }
    likeByTitleAndVerify(title) {
        this.postFeed.likeAndVerifyCountIncrement(title);
    }
    removeLikeByTitleAndVerify(title) {
        this.postFeed.removeLikeAndVerifyCountDecrement(title)
    }
    clickPostAuthor(author) {
        this.postFeed.clickPostAuthor(author);
    }
    clickPostByAuthor(author) {
        this.postFeed.clickPostByAuthor(author);
    }
    clickGlobalFeedTab() {
        this.postFeed.clickGlobalFeedTab();
    }
    clickYourFeedTab() {
        this.postFeed.clickYourFeedTab();
    }

    assertPostsByAuthorDisplayed(author) {
        this.postFeed.assertPostIsDisplayedByAuthor(author)
    }
    assertNoPostsDisplayed() {
        this.postFeed.assertNoPostsDisplayed();
    }

    visit() {
        return super.visit('');
    }
}