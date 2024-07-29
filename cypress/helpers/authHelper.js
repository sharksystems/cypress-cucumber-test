import HomePage from "../pages/HomePage.js";
import RegistrationPage from "../pages/RegistrationPage.js";
import LoginPage from "../pages/LoginPage.js";
import RandomUser from '../resources/RandomUser.js';
import ProfileSettingsPage from "../pages/ProfileSettingsPage.js";

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const settingsPage = new ProfileSettingsPage();
const loginPage = new LoginPage();
let randomUser = new RandomUser();

export function visitHomePage() {
  homePage.visit();
}
export function signUpUser(username = randomUser.getUsername, email = randomUser.getEmail, password = randomUser.getPassword) {
  homePage.clickSignUpBtn();
  registrationPage.registerUser(username, email, password);
}
export function loginUser(email = randomUser.getEmail, password = randomUser.getPassword) {
  homePage.clickSignInBtn();
  loginPage.login(email, password);
}
export function logoutUser() {
  homePage.clickSettingsBtn();
  settingsPage.clickLogoutBtn();
}
export function assertUserLoggedIn(user = randomUser) {
  homePage.assertLoggedInAs(user.getUsername);
}