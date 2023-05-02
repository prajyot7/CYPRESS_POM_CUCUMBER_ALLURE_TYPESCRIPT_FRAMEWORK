/// <reference types="cypress" />

import { loginPage } from "./loginPage"

class MyAccountPage {
    get signoutLink() { return cy.get(`a[href="/logout"]`) }
    get pageHeading() { return cy.get(`ul.nav.navbar-nav li a`).last() }

    public validateSuccessfulLogin() {
        this.pageHeading.should('contains.text', ' Logged in as ')
    }

    public logout() {
        this.signoutLink.click()
    }

    public validateSuccessfulLogout() {
        loginPage.signinLink.should('be.visible')
    }
}

export const myAccountPage: MyAccountPage = new MyAccountPage()