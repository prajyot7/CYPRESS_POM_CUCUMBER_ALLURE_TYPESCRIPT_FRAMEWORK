import { LoginPage } from "../page-objects/login.page";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = new LoginPage();


Given(/^user is on the login page$/, async (page) => {
    await loginPage.openBrowser()
});
Given(/^I open the browser and load the url (.+)$/, async (homepageurl: string) => {
     loginPage.openBrowser()
     cy.url().contains(homepageurl)
});
When(/^enter (.+) and (.+)$/, (username:any, password:any) => {
    loginPage.login(username, password);
});

Then(/^validate flash message (.+)$/, async (message) => {
    loginPage.validateFlasher(message)
});


