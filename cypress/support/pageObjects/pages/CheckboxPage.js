import Helper from '../../../utils/Helper'
import { CheckboxElements } from '../elements/CheckboxElements'

class CheckboxPage {
    static visit() {
        return cy.visit('https://demoqa.com/checkbox')
    }

    //Actions methods
    static checkHomeCheckbox() {
        CheckboxElements.checkboxesElements.checkAllButton().click()
    }

    static checkDesktopCheckbox() {
        CheckboxElements.checkboxes.desktopCheckbox().click()
    }

    static checkDocumentsCheckbox() {
        CheckboxElements.checkboxes.documentCheckbox().click()
    }

    static checkDownloadsCheckbox() {
        CheckboxElements.checkboxes.downloadsCheckbox().click()
    }

    static expandOptions() {
        cy.scrollTo('top');
        CheckboxElements.checkboxesElements.toggleButton().click()
    }

    //Verification methods
    static verifyResultTextAllCheckboxes() {
        return CheckboxElements.checkboxesElements.resultBox().then(($el) => {
            let words = '';
            $el.find('.text-success').each((index, element) => {
                words += Cypress.$(element).text() + ' ';
            });
            words = words.trim();
            const textResult = 'You have selected :' + words;
            expect(textResult).equal("You have selected :home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile");
        });
    }

    static verifyResultTextDesktopCheckbox() {
        return CheckboxElements.checkboxesElements.resultBox().then(($el) => {
            let words = '';
            $el.find('.text-success').each((index, element) => {
                words += Cypress.$(element).text() + ' ';
            });
            words = words.trim();
            const textResult = 'You have selected :' + words;
            expect(textResult).equal("You have selected :desktop notes commands");
        });
    }

    static verifyResultExistence(exist){
        Helper.checkExistence(CheckboxElements.checkboxesElements.resultBox(), exist);
    }

}

export { CheckboxPage };