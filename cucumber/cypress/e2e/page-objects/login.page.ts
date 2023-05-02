
export class LoginPage{
    elements = {
        usernameInput: () => cy.get("#username"),
        passwordInput: () => cy.get("#password"),
        loginBtn: () => cy.get(`button[type="submit"]`),
        errorMessage: () => cy.get('#flash'),
        successMessage:()=> cy.get(`div.flash.success`),
        unsuccessMessage:()=> cy.get(`div.flash.error `),
        logOutBtn:()=>cy.get(`a.button.secondary.radius`)
      };
    openBrowser(){
         cy.visit('https://the-internet.herokuapp.com/login');
        //  browser.url('https://the-internet.herokuapp.com/login')
    }
    launchBrowser(url: string){
        console.log('url : '+ url)
         cy.visit(url);
        //  browser.url('https://the-internet.herokuapp.com/login')
    }

    login(username: string, password: string) {
        this.elements.usernameInput().clear().type(username)
       this.elements.passwordInput().clear().type(password)
       this.elements.loginBtn().click()
    }
    
    // getflashSuccessAlert(text:string) { 
    //     return  `//div[@class='flash success' and contains(text(),'${text}')]`) 
    // }
    // getflashErrorAlert(text:string) { 
    //     return  `//div[@class='flash error' and contains(text(),'${text}')]`) 
    // }
    validateFlasher(message: any){
        this.elements.errorMessage().should('be.visible').should("contain.text",message)
    }
   
}


