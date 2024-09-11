import { TextboxFormElements } from "../elements/TextboxFormElements"

class TextboxPage {
    static visit() {
        return cy.visit('https://demoqa.com/text-box')
    }

    //Actions methods
    static fillTextBoxForm() {
        TextboxFormElements.textBoxFormElements.usernameField().type('Antonio')
        TextboxFormElements.textBoxFormElements.emailField().type('testcypress@test.com')
        TextboxFormElements.textBoxFormElements.currentAddressField().type('Calle Test Cypress')
        TextboxFormElements.textBoxFormElements.permanentAddressField().type('Calle Test Cypress ')
        TextboxFormElements.textBoxFormElements.submitButton().click()
    }

    //Verification methods
    static verifyTextBoxResults(expectedResults) {
        const outputFields = [
            TextboxFormElements.outputField.name,
            TextboxFormElements.outputField.email,
            TextboxFormElements.outputField.currentAddress,
            TextboxFormElements.outputField.permanentAddress
        ];
    
        outputFields.forEach((field, index) => {
            field().then((text) => {
                cy.wrap(text).should('include', expectedResults[index]);
            });
        });
    }    
}

export { TextboxPage };