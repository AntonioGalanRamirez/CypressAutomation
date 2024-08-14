import { ElementsPageElements } from '../elements/ElementsPageElements'

class ElementsPage {
    static visit() {
        return cy.visit('https://demoqa.com/elements')
    }

    //Access methods
    static goToTextBoxSection() {
        return ElementsPageElements.elementsMenuLinks.textBoxFormLink().click()
    }

    static goToCheckBoxSection() {
        return ElementsPageElements.elementsMenuLinks.checkBoxFormLink().click()
    }

    //Actions methods
    static fillTextBoxForm() {
        ElementsPageElements.textBoxFormElements.usernameField().type('Antonio')
        ElementsPageElements.textBoxFormElements.emailField().type('antoniogalan1907@gmail.com')
        ElementsPageElements.textBoxFormElements.currentAddressField().type('Calle de Garganchon 112')
        ElementsPageElements.textBoxFormElements.permanentAddressField().type('Calle de Garganchon 112')
        ElementsPageElements.textBoxFormElements.submitButton().click()
    }

    static checkHomeCheckbox() {
        ElementsPageElements.checkBoxElements.checkAllButton().click()
    }

    static checkDesktopCheckbox() {
        ElementsPageElements.checkboxes.desktopCheckbox().click()
    }

    static checkDocumentsCheckbox() {
        ElementsPageElements.checkboxes.documentCheckbox().click()
    }

    static checkDownloadsCheckbox() {
        ElementsPageElements.checkboxes.downloadsCheckbox().click()
    }

    static expandOptions() {
        cy.scrollTo('top');
        ElementsPageElements.checkBoxElements.toggleButton().click()
    }

    //Verification methods
    static verifyResultTextAllCheckboxes(){
        return ElementsPageElements.checkBoxElements.resultBox().then(($el) => {
            let words = '';
            $el.find('.text-success').each((index, element) => {
              words += Cypress.$(element).text() + ' ';
            });
            words = words.trim();
            const textResult = 'You have selected :' + words;
            expect(textResult).equal("You have selected :home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile");
          });
    }

    static verifyResultTextDesktopCheckbox(){
        return ElementsPageElements.checkBoxElements.resultBox().then(($el) => {
            let words = '';
            $el.find('.text-success').each((index, element) => {
              words += Cypress.$(element).text() + ' ';
            });
            words = words.trim();
            const textResult = 'You have selected :' + words;
            expect(textResult).equal("You have selected :desktop notes commands");
          });
    }

}

export { ElementsPage };