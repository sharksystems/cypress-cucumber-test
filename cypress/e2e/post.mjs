import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { visitHomePage, signUpUser, loginUser, assertUserLoggedIn} from '../helpers/authHelper.js';
import HomePage from '../pages/HomePage.js';
import ProfilePage from '../pages/ProfilePage.js';
import PostCreationPage from '../pages/PostCreationPage.js';
import FullPostPage from '../pages/FullPostPage.js';
import RandomUser from '../resources/RandomUser.js';
import RandomPost from '../resources/RandomPost.js';

const homePage = new HomePage();
const profilePage = new ProfilePage();
const postCreationPage = new PostCreationPage();
const fullPostPage = new FullPostPage();
const postUser = new RandomUser();
const followUser = new RandomUser();
const randomPost = new RandomPost();
const editedPost = new RandomPost();

Given('the user is on the home page', function () {
  visitHomePage();
});
Given('the user is signed up', function () {
  visitHomePage();
  signUpUser();
});
Given('the user is logged in', function () {
  visitHomePage();
  loginUser();
  assertUserLoggedIn();
});
Given('the user is signed up as Post user', function () {
  signUpUser(postUser.getUsername, postUser.getEmail, postUser.getPassword);
});
Given('the user is signed in as Post user', function () {
  loginUser(postUser.getEmail, postUser.getPassword);
});
Given('the user is signed up as Follow user', function () {
  signUpUser(followUser.getUsername, followUser.getEmail, followUser.getPassword);
});

When('the user clicks on the "Global Feed" tab', function () {
  homePage.clickGlobalFeedTab();
});
When('the user clicks like on a post titled {string}', function (postTitle) {
  homePage.likePostByTitle(postTitle);
});
When('the user likes a post titled {string}', function (postTitle) {
  homePage.likeByTitleAndVerify(postTitle);
});
When('the user navigates to their profile', function () {
  homePage.clickProfileBtn();
});
When('the user removes the liked post titled {string}', function (postTitle) {
  profilePage.clickFavoritedArticlesTab();
  profilePage.removeLikeFromPostByTitleAndVerify(postTitle);
  profilePage.clickMyArticlesTab();
  profilePage.clickFavoritedArticlesTab();
});
When('the user creates a post with random data', function () {
  homePage.clickNewPostBtn();
  postCreationPage.createPost(randomPost.getTitle, randomPost.getSummary, randomPost.getContent);
  postCreationPage.clickPostSubmitBtn();
});
When('the user edits the post with new data', function () {
  homePage.clickProfileBtn();
  profilePage.clickPostByTitle(randomPost.getTitle);
  fullPostPage.clickEditPostBtn();
  postCreationPage.createPost(editedPost.getTitle, editedPost.getSummary, editedPost.getContent);
});
When('the user deletes the post', function () {
  homePage.clickProfileBtn();
  profilePage.clickPostByTitle(randomPost.getTitle);
  fullPostPage.clickDeletePostBtn();
});
When('the user clicks on an author named {string} on any post', function (author) {
  homePage.clickPostAuthor(author);
});
When('the user clicks on any post from the author named {string}', function (author) {
  homePage.clickPostByAuthor(author);
});
When('the user clicks on the "Follow author" button', function () {
  profilePage.clickFollowBtn();
});
When('the user navigates to the Home page', function () {
  homePage.clickHomeBtn();
});


Then('the posts by the author named {string} should be displayed in the "Your Feed" tab', function (author) {
  homePage.assertPostsByAuthorDisplayed(author);
});
Then('the posts should be removed from the "Your Feed" tab', function () {
  homePage.assertNoPostsDisplayed();
});
Then('the user is transferred to the Registration page', function () {
  cy.url().should('eq', 'https://conduit.realworld.how/register');
});
Then('the like count on the post titled {string} should increase', function (postTitle) {
  profilePage.removeLikeFromPostByTitleAndVerify(postTitle);
});
Then('the post should be created with the provided data', function () {
  fullPostPage.verifyPostContents(randomPost.getTitle, randomPost.getSummary, randomPost.getContent);
});
Then('the post should be updated with the new data', function () {
  fullPostPage.verifyPostContents(editedPost.getTitle, editedPost.getSummary, editedPost.getContent);
});

Then('the post should be removed from favorites', function () {
  profilePage.assertNoPostsDisplayed();
});
Then('the post should be removed from the profile', function () {
  homePage.clickProfileBtn();
  profilePage.assertNoPostsDisplayed();
});