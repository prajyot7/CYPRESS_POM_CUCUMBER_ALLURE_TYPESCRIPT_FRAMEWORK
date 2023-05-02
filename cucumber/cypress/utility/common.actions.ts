export default class CommonActions {

    public static async clickElement(element: any){
        return await element.click();
    }
    public static async enterValue(ele:any, value: any){
        await ele.type(value)
    }
    public static async selectRadioButton(text:string){
        if(text==='Mr'){
        cy.get(`[type='radio']`).first().check()
        }else{
            cy.get(`[type='radio']`).last().check()
        }
    }
    public static async selectCheckBox(text:string){
        cy.xpath(`//label[@for='${text}']/ancestor::div[@class='checkbox']//input`).check()
    }
    public static async selectDropDown(colName: string,listValue: any){
        cy.get(`select#${colName}`).select(listValue).should('have.value',listValue)
    }
}
