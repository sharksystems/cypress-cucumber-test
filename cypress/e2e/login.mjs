import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { visitHomePage, signUpUser, loginUser, logoutUser, assertUserLoggedIn} from '../helpers/authHelper.js';
import HomePage from '../pages/HomePage.js';
import LoginPage from '../pages/LoginPage.js';
import ProfileSettingsPage from '../pages/ProfileSettingsPage.js';
import RandomUser from '../resources/RandomUser.js';

const homePage = new HomePage();
const loginPage = new LoginPage();
const profileSettingsPage = new ProfileSettingsPage();
const invalidUser = new RandomUser();

Given('the user is on the home page', function () {
  visitHomePage();
});

Given('the user has an existing account', function () {
  visitHomePage();
  signUpUser();
  logoutUser();
});
Given('the user is logged in', function () {
  visitHomePage();
  loginUser();
  assertUserLoggedIn();
});

When('the user clicks on the "Sign in" button', function () {
  homePage.clickSignInBtn();
});

When('the user logs in with their email and password', function () {
  loginUser();
});

Then('the user should be logged in', function () {
  assertUserLoggedIn();
});

When('the user attempts to log in with an invalid email', function () {
  loginUser(invalidUser.getEmail);
});
When('the user attempts to log in with an invalid password', function () {
  loginUser(undefined, invalidUser.getPassword)
});

Then('an error message should be displayed', function () {
  loginPage.assertUsernameOrPasswordErrorMsg();
});

When('the user navigates to settings', function () {
  homePage.clickSettingsBtn();
});

When('the user logs out', function () {
  profileSettingsPage.clickLogoutBtn();
});

Then('the sign-in button should be visible', function () {
  homePage.assertSignInBtnVisible();
});