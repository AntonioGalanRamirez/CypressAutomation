import { HomePage } from '../support/pageObjects/pages/HomePage'
import { ElementsPage } from '../support/pageObjects/pages/ElementsPage'
import { ElementsPageElements } from '../support/pageObjects/elements/ElementsPageElements';


describe("Home Page tests", () => {
    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    });

    it("Test 1 -> TextBox Form", () => {
        HomePage.visit();
        HomePage.goToElementsPage();
        ElementsPage.goToTextBoxSection();
        ElementsPage.fillTextBoxForm();

        ElementsPageElements.outputField.name().then((nameText) => {
            expect(nameText).to.include('Name:Antonio');
        });

        ElementsPageElements.outputField.email().then((emailText) => {
            expect(emailText).to.include('Email:antoniogalan1907@gmail.com');
        });

        ElementsPageElements.outputField.currentAddress().then((currentAddressText) => {
            expect(currentAddressText).to.include('Current Address :Calle de Garganchon 112');
        });

        ElementsPageElements.outputField.permanentAddress().then((permanentAddressText) => {
            expect(permanentAddressText).to.include('Permananet Address :Calle de Garganchon 112');
        });
    })

    it.only('Test 2 -> CheckBoxes', () => {
        HomePage.visit();
        HomePage.goToElementsPage();
        ElementsPage.goToCheckBoxSection();
        ElementsPage.checkAllCheckBoxes();

    })


})