import { HomePage } from '../support/pageObjects/pages/HomePage'
import { ElementsPage } from '../support/pageObjects/pages/ElementsPage'
import { ElementsPageElements } from '../support/pageObjects/elements/ElementsPageElements';
import Logger from '../utils/Logger';


describe("Elements Page tests", () => {
    const logger = new Logger();

    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();
    });

    beforeEach(() => {
        logger.log("Access the demoqa website", "Step")
        HomePage.visit();
    });

    it("Test 1 -> TextBox Form", () => {
        logger.log("Go to the Elements section and then to the Text Box section", "Step")
        HomePage.goToElementsPage();
        ElementsPage.goToTextBoxSection();

        logger.log("Fills in the fields of the TextBox form", "Step")
        ElementsPage.fillTextBoxForm();

        logger.log("Verifies the result returned by the form", "Verification")
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
        logger.log("Go to the Checkbox section", "Step")
        HomePage.goToElementsPage();
        ElementsPage.goToCheckBoxSection();

        //Check Home checkbox
        logger.log("Check Home checkbox", "Step")
        ElementsPage.checkHomeCheckbox();

        logger.log("Verify the result", "Verification")
        ElementsPage.verifyResultTextAllCheckboxes()

        //Uncheck Home checkbox
        logger.log("Uncheck Home checkbox", "Step")
        ElementsPage.checkHomeCheckbox();
        logger.log("Verify text result doesnt exist", "Verification")
        ElementsPageElements.checkBoxElements.resultBox().should('not.exist')

        //Expand Home checkbox options and select them individually
        logger.log("Expand the checkbox options", "Step")
        ElementsPage.expandOptions()

        //Selecting all individually
        logger.log("Select all checkboxes individually", "Step")
        ElementsPage.checkDesktopCheckbox()
        ElementsPage.checkDocumentsCheckbox()
        ElementsPage.checkDownloadsCheckbox()

        logger.log("Verify the result", "Verification")
        ElementsPage.verifyResultTextAllCheckboxes()


        //Selecting only Desktop checkbox
        logger.log("Clear checkboxes", "Step")
        ElementsPage.checkHomeCheckbox();
        logger.log("Select only desktop checkbox", "Step")
        ElementsPage.checkDesktopCheckbox()
        logger.log("Verify the result", "Verification")
        ElementsPage.verifyResultTextDesktopCheckbox()
        

    })


})