import CommonActions from "../../utility/common.actions";
import { Automatione2ePage } from "../page-objects/automatione2e.page";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { FormPage } from "../page-objects/form.page";
import { when } from "cypress/types/jquery";
const automatione2ePage = new Automatione2ePage();
const formPage = new FormPage();


Given(/^navigate to website$/, async (page) => {
    automatione2ePage.openBrowser()
});
When(/^clickon signuporlogin button$/, () => {
    CommonActions.clickElement(automatione2ePage.getMenu('login'))
    automatione2ePage.verifyTitle('Automation Exercise - Signup / Login')
});
When(/^click on (.+) button$/, (message:any) => {
    CommonActions.clickElement(automatione2ePage.getMenu(message))
    automatione2ePage.verifyTitle('Automation Exercise - Contact Us')
});
When(/^click on testcase link$/, (message:any) => {
    automatione2ePage.elements.testCasesLink().click({ force: true })
})
Then(/^verify (.+) tab is visible$/, async (message) => {
    automatione2ePage.verifyTab('signup', message)
});
Then(/^verify contact us tab (.+)$/, async (message) => {
    automatione2ePage.verifyTab('contact', message)
});
Then(/^verify testcase tab$/, async () => {
    automatione2ePage.verifyTestCaseTab('Test Cases')
});
Then(/^verify account information tab (.+)$/, async (message) => {
    automatione2ePage.verifyTab('login', message)
});
Then(/^verify alert and click on ok button$/, async (message) => {
    automatione2ePage.verifyAndAcceptAlert()
});
Then(/^verify test case page load successfully$/, async () => {
    automatione2ePage.verifyTestCaseList()
});
Then(/^verify (.+) message$/, async (message:any) => {
    automatione2ePage.verifyAlertSuccessMessage(message)
});
Then(/^click Home button and verify that landed to home page successfully$/, async (message:any) => {
    automatione2ePage.clickOnHomeButton();
    automatione2ePage.verifyTitle('Automation Exercise')
});
When(/^fill (.+) and (.+) and click on submit button$/, (username: any, password: any) => {
    automatione2ePage.enterValue(automatione2ePage.getFormElement('signup-name'), username)
    automatione2ePage.enterValue(automatione2ePage.getFormElement('signup-email'), password)
    CommonActions.clickElement(automatione2ePage.elements.signupBtn())
});
When(/^enter all mandate fields$/, async () => {
    cy.fixture('formdata').then(async function (data) {
        await formPage.selectTitle(data.title)
        await formPage.setPassword(data.password)
        await CommonActions.selectDropDown('days', data.day)
        await formPage.selectMonth('months', data.month)
        await CommonActions.selectDropDown('years', data.year)
        await CommonActions.selectCheckBox('newsletter')
        await CommonActions.selectCheckBox('optin')
        await formPage.setnames(data.fname, data.lname);
        await formPage.setAddress(data.address1)
        await formPage.setState(data.state)
        await formPage.setCity(data.city)
        await formPage.setZipCode(data.zipcode)
        await formPage.setMobileNumber(data.mobilenumber)
    })
    await CommonActions.clickElement(automatione2ePage.elements.createAccountBtn())
})
Then(/^verify account Creation tab (.+)$/, async (message) => {
    automatione2ePage.verifyAccCreationTab(message)
    CommonActions.clickElement(automatione2ePage.elements.continueBtn())
});
Then(/^verify account Delete Account tab (.+)$/, async (message) => {
    automatione2ePage.deleteAccount()
    automatione2ePage.verifyAccCreationTab(message)
    CommonActions.clickElement(automatione2ePage.elements.continueBtn())
});
Then(/^verify loggin (.+) name$/, async (message: any) => {
    automatione2ePage.verifyLoginUser(message)
});
Then(/^logout user$/, async () => {
    automatione2ePage.clickOnLogout()
});
Then(/^verify login to account tab (.+)$/, async (message) => {
    automatione2ePage.verifyTab('login', message)
});
When(/^login using valid credentials$/, async () => {
    cy.fixture('formdata').then(async function (data) {
        await CommonActions.enterValue(automatione2ePage.elements.loginEmail(), data.email)
        await CommonActions.enterValue(automatione2ePage.elements.loginPassword(), data.password)
    })
    await CommonActions.clickElement(automatione2ePage.elements.loginButton())
})
When(/^fill incorrect (.+) and (.+) and click on login button$/, (username: any, password: any) => {
    automatione2ePage.enterValue(automatione2ePage.getFormElement('login-email'), username)
    automatione2ePage.enterValue(automatione2ePage.getFormElement('login-password'), password)
    CommonActions.clickElement(automatione2ePage.elements.loginButton())
});
When(/^fill (.+) and (.+) click login$/, (username: any, password: any) => {
    automatione2ePage.enterValue(automatione2ePage.getFormElement('login-email'), username)
    automatione2ePage.enterValue(automatione2ePage.getFormElement('login-password'), password)
    CommonActions.clickElement(automatione2ePage.elements.loginButton())
});
Then(/^verify error message is (.+)$/, async (message:any) => {
    automatione2ePage.verifyErrorMessage(message)
});
When(/^enter all contactus fields$/, async () => {
    cy.fixture('contactusdata').then(async function (data) {
        formPage.contactUsFormFill(data.name,data.email,data.subject,data.message)
    })
    formPage.elements.uploadFile().selectFile(`cypress/fixtures/example.json`)
    CommonActions.clickElement(formPage.elements.submitButton())
})


