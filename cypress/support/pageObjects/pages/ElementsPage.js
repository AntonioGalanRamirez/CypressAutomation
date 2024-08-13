import { ElementsPageElements } from '../elements/ElementsPageElements'

class ElementsPage {
    static visit() {
        return cy.visit('https://demoqa.com/elements')
    }

    static goToTextBoxSection() {
        return ElementsPageElements.elementsMenuLinks.textBoxFormLink().click()
    }

    static goToCheckBoxSection(){
        return ElementsPageElements.elementsMenuLinks.checkBoxFormLink().click()
    }


    static fillTextBoxForm() {
        ElementsPageElements.textBoxFormElements.usernameField().type('Antonio')
        ElementsPageElements.textBoxFormElements.emailField().type('antoniogalan1907@gmail.com')
        ElementsPageElements.textBoxFormElements.currentAddressField().type('Calle de Garganchon 112')
        ElementsPageElements.textBoxFormElements.permanentAddressField().type('Calle de Garganchon 112')
        ElementsPageElements.textBoxFormElements.submitButton().click()
    }

    static checkAllCheckBoxes(){
        ElementsPageElements.checkBoxElements.checkAllButton().click()
    }
}

export { ElementsPage };