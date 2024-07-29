import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { visitHomePage, signUpUser, loginUser, logoutUser, assertUserLoggedIn} from '../helpers/authHelper.js';
import HomePage from "../pages/HomePage.js";
import RandomUser from '../resources/RandomUser.js';
import RegistrationPage from '../pages/RegistrationPage.js';

const homePage = new HomePage();
const registrationPage = new RegistrationPage()
const existingUser = new RandomUser();

Given('the user is on the home page', function () {
  visitHomePage();
});
Given('the user has an existing account', function () {
  visitHomePage();
  signUpUser(existingUser.getUsername, existingUser.getEmail, existingUser.getPassword);
  logoutUser();
})
Given('the user is logged in', function () {
  visitHomePage();
  loginUser();
  assertUserLoggedIn();
});

When('the user clicks on the "Sign up" button', function () {
  homePage.clickSignUpBtn();
});
When('the user registers with a random username, email, and password', function () {
  signUpUser();
});
When('the user attempts to register using existing data', function () {
  signUpUser(existingUser.getUsername, existingUser.getEmail, existingUser.getPassword);
});

Then('the error message informing the email is taken is displayed', function () {
  registrationPage.assertEmailTakenErrorMsg();
});
Then('the user should be logged in', function () {
  assertUserLoggedIn();
});