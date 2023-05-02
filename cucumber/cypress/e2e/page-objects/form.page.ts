import CommonActions from '../../utility/common.actions'

export class FormPage {
    elements = {
        headerText: () => cy.get(`img[alt='Website for automation practice']`),
        passwordInput: () => cy.get("#password"),
        firstNameInput: () => cy.get("#first_name"),
        lastNameInput: () => cy.get("#last_name"),
        address1Input: () => cy.get("#address1"),
        stateInput: () => cy.get("#state"),
        cityInput: () => cy.get("#city"),
        zipcodeInput: () => cy.get("#zipcode"),
        mobileNumberInput: () => cy.get("#mobile_number"),
        loginBtn: () => cy.get(`button[type="submit"]`),
        createAccountBtn: () => cy.get(`button[data-qa="create-account"]`),
        //contact_us page elements
        nameInput: () => cy.get(`[name="name"]`),
        emailInput: () => cy.get(`[name="email"]`),
        subjectInput: () => cy.get(`[name="subject"]`),
        messageInput: () => cy.get("#message"),
        uploadFile: () => cy.get(`[name="upload_file"]`),
        submitButton:() =>cy.get(`.submit_form`)
      };

    async setnames(fname:string, lname:string) {
       await CommonActions.enterValue(this.elements.firstNameInput(), fname);
       await CommonActions.enterValue(this.elements.lastNameInput(), lname);
    }

    async setMobileNumber(mobnum:string) {
        await CommonActions.enterValue(this.elements.mobileNumberInput(), mobnum);
    }
    async setAddress(address: any){
        await CommonActions.enterValue(this.elements.address1Input(),address)
    }
    async setState(state:string) {
        await CommonActions.enterValue(this.elements.stateInput(), state);
    }
    async setCity(city:string) {
        await CommonActions.enterValue(this.elements.cityInput(), city);
    }
    async setZipCode(zipcode:string) {
        await CommonActions.enterValue(this.elements.zipcodeInput(), zipcode);
    }
    async selectTitle(titleText: string){
        await CommonActions.selectRadioButton(titleText)
    }
    async setPassword(password:any){
        await CommonActions.enterValue(this.elements.passwordInput(),password)
    }
    async selectMonth(colName: string,listValue: string){
        let listValue1:any
        if(listValue ==='January'){
            listValue1= '1'
        }else if(listValue ==='February'){
            listValue1= '2'
        }else if(listValue ==='March'){
            listValue1= '3'
        }else if(listValue ==='April'){
            listValue1= '4'
        }else if(listValue ==='May'){
            listValue1= '5'
        }else if(listValue ==='June'){
            listValue1= '6'
        }else if(listValue ==='July'){
            listValue1= '7'
        }else if(listValue ==='August'){
            listValue1= '8'
        }else if(listValue ==='September'){
            listValue1= '9'
        }else if(listValue ==='October'){
            listValue1= '10'
        }else if(listValue ==='November'){
            listValue1= '11'
        }else {
            listValue1= '12'
        }
        cy.get(`select#${colName}`).select(listValue1).should('have.value',listValue1)
    }

    async contactUsFormFill(name: string, email: string, subject: string, message: string){
         this.elements.nameInput().type(name);
         this.elements.emailInput().type(email);
         this.elements.subjectInput().type(subject);
         this.elements.messageInput().type(message);
    }
}