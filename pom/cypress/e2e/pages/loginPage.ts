/// <reference types="cypress" />

class LoginPage {
    get signinLink() { return cy.get('a[href="/login"]') }
    get emailAddressTxt() { return cy.get(`[data-qa='login-email']`) }
    get passwordTxt() { return cy.get(`[data-qa='login-password']`) }
    get signinBtn() { return cy.get(`[data-qa='login-button']`) }
    get alertBox() { return cy.get('p:contains("error")')}
    get alertMessage() { return cy.get('form p').first()}
    
    public launchApplication() {
        cy.visit('/')
    }

    public login(emailId: string, password: string) {
        this.signinLink.click()
        this.emailAddressTxt.type(emailId)
        this.passwordTxt.type(password)
        this.signinBtn.click()
    }

    public validateLoginError(errorMessage: string) {
        this.alertMessage.should('be.visible')
        this.alertMessage.should('have.text', errorMessage)

    }
}
export const loginPage: LoginPage = new LoginPage()