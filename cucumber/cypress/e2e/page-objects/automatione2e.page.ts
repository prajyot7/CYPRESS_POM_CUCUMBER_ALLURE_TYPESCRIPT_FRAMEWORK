import CommonActions from "../../utility/common.actions";

export class Automatione2ePage{
    elements = {
        headerText: () => cy.get(`img[alt='Website for automation practice']`),
        passwordInput: () => cy.get("#password"),
        firstNameInput: () => cy.get("#first_name"),
        lastNameInput: () => cy.get("#last_name"),
        address1Input: () => cy.get("#address1"),
        stateInput: () => cy.get("#state"),
        cityInput: () => cy.get("#city"),
        loginEmail:()=>cy.get(`[data-qa='login-email']`),
        loginPassword:()=>cy.get(`[data-qa='login-password']`),
        loginButton:()=>cy.get(`[data-qa='login-button']`),
        zipcodeInput: () => cy.get("#zipcode"),
        mobileNumberInput: () => cy.get("#mobile_number"),
        loginBtn: () => cy.get(`button[type="submit"]`),
        createAccountBtn: () => cy.get(`button[data-qa="create-account"]`),
        signupBtn: () => cy.get(`button[data-qa='signup-button']`),
        continueBtn: () => cy.get(`[data-qa='continue-button']`),
        successMessage:()=> cy.get(`div.flash-success`),
        unsuccessMessage:()=> cy.get(`div.flash.error `),
        logOutBtn:()=>cy.get(`a.button.secondary.radius`),
        errorMessage:()=>cy.get('form p').first(),
        alertSuccess:()=>cy.get(`div.contact-form div.alert-success`),
        homeButton:()=>cy.get(`div#form-section a.btn.btn-success`),
        testCasesLink:()=>cy.get(`div.shop-menu.pull-right ul li a[href="/test_cases"]`)
      };
      openBrowser(){
        cy.visit(`http://automationexercise.com`)
        cy.title().should('eq','Automation Exercise')
      }
      getMenu(itemName:string){
        return cy.get(`a[href="/${itemName}"]`)
      }
      verifyLoginUser(itemName:string){
        cy.get(`ul.nav.navbar-nav li a`).last().should('have.text',' Logged in as '+itemName)
        
      }
      verifyTitle(titleText:any){
        cy.title().should('eq',titleText);
      }
    verifyTab(tabname: any,tabText: any){
        cy.get(`div.${tabname}-form h2`).first().should('be.visible').should('contain.text',tabText)

    }
    verifyTestCaseTab(tabText: any){
        cy.get(`div h2.title.text-center  b`).first().should('be.visible').should('contain.text',tabText)

    }
    verifyAccCreationTab(valueText: any){
        cy.get(`section h2`).should('be.visible').should('contain.text',valueText)
    }
    getFormElement(eleName:any){
        return cy.get(`form input[data-qa='${eleName}']`)
    }
    verifyElement(ele:any,textVal:any){
        ele.should('have',textVal)
    }
    enterValue(ele:any, value: any){
        ele.type(value)
    }
    selectRadioButton(text:string){
        if(text==='Mr'){
        cy.get(`[type='radio']`).first().check()
        }else{
            cy.get(`[type='radio']`).last().check()
        }
    }
    selectCheckBox(text:string){
        cy.xpath(`//label[@for='${text}']/ancestor::div[@class='checkbox']//input`).check()
    }
    selectDropDown(colName: string,listValue: string | number | (string | number)[]){
        cy.get(`#uniform-${colName}`).select(listValue).should('have.value',listValue)
    }
    fillDetails(checkText: string,dayText: any,monthText: any,yearText: any, checkText1: string,checkText2: string, fname: any,lname: any,address1: any,state: any,city: any,zipcode: any,mobileNumber: any){
        this.selectRadioButton(checkText);
        this.elements.passwordInput().type('Welcome123!')
        this.selectDropDown('days',dayText)
        this.selectDropDown('months',monthText)
        this.selectDropDown('years',yearText)
        this.selectRadioButton(checkText1);
        this.selectRadioButton(checkText2);
        this.enterValue(this.elements.firstNameInput(),fname)
        this.enterValue(this.elements.lastNameInput(),lname)
        this.enterValue(this.elements.address1Input(),address1)
        this.enterValue(this.elements.stateInput(),state)
        this.enterValue(this.elements.cityInput(),city)
        this.enterValue(this.elements.zipcodeInput(),zipcode)
        this.enterValue(this.elements.mobileNumberInput(),mobileNumber)


    }
    async deleteAccount(){
        await CommonActions.clickElement(this.getMenu('delete_account'))
    }
    async clickOnLogout(){
        await CommonActions.clickElement(this.getMenu('logout'))
    }
    async clickOnHomeButton(){
        await CommonActions.clickElement(this.elements.homeButton())
    }
    async verifyErrorMessage(message:string){
         this.elements.errorMessage().should('have.text',message)
    }
    async verifyAlertSuccessMessage(message:string){
        this.elements.alertSuccess().should('have.text',message)
   }
    verifyAndAcceptAlert(){
        cy.on("window:alert", (str) => {
            //window:alert is the event which get fired on alert open
              expect(str).to.equal("Press OK to proceed!");
            cy.get('[name="alert"]').click();
            });
        cy.contains('OK').click()
    }
    verifyTestCaseList(){
        cy.get('div.panel-group').find('h4.panel-title a u').should('have.length', 26)
    }

}