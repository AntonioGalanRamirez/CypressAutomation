import { CheckboxPage } from '../support/pageObjects/pages/CheckboxPage';
import { TextboxPage } from '../support/pageObjects/pages/TextboxPage';
import { WebtablesPage } from '../support/pageObjects/pages/WebtablesPage';
import Logger from '../utils/Logger';

describe("Elements Section tests", () => {
    const logger = new Logger();

    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.clearAllSessionStorage();

        logger.log("Access the demoqa website", "Step");
        cy.visit('/');
    });

    it("Test 1 -> Textbox Form", () => {
        logger.log("Go to the Elements section and then to the Text Box section", "Step");
        TextboxPage.visit();

        logger.log("Fills in the fields of the TextBox form", "Step");
        TextboxPage.fillTextBoxForm();

        logger.log("Verifies the result returned by the form", "Verification");
        TextboxPage.verifyTextBoxResults([
            'Name:Antonio',
            'Email:testcypress@test.com',
            'Current Address :Calle Test Cypress',
            'Permananet Address :Calle Test Cypress'
        ]);
    });

    it('Test 2 -> Checkboxes', () => {
        logger.log("Go to the Checkbox section", "Step");
        CheckboxPage.visit();

        // Check Home checkbox
        logger.log("Check Home checkbox", "Step");
        CheckboxPage.checkHomeCheckbox();

        logger.log("Verify the result", "Verification");
        CheckboxPage.verifyResultTextAllCheckboxes();

        // Uncheck Home checkbox
        logger.log("Uncheck Home checkbox", "Step");
        CheckboxPage.checkHomeCheckbox();
        logger.log("Verify text result doesn't exist", "Verification");
        CheckboxPage.verifyResultExistence(false);

        // Expand Home checkbox options and select them individually
        logger.log("Expand the checkbox options", "Step");
        CheckboxPage.expandOptions();

        // Selecting all individually
        logger.log("Select all checkboxes individually", "Step");
        CheckboxPage.checkDesktopCheckbox();
        CheckboxPage.checkDocumentsCheckbox();
        CheckboxPage.checkDownloadsCheckbox();

        logger.log("Verify the result", "Verification");
        CheckboxPage.verifyResultTextAllCheckboxes();

        // Selecting only Desktop checkbox
        logger.log("Clear checkboxes", "Step");
        CheckboxPage.checkHomeCheckbox();
        logger.log("Select only desktop checkbox", "Step");
        CheckboxPage.checkDesktopCheckbox();
        logger.log("Verify the result", "Verification");
        CheckboxPage.verifyResultTextDesktopCheckbox();
    });

    it.only('Test 3 -> Web tables (creating, editing and deleting)', () => {
        // Navigate to web tables
        logger.log("Go to Webtables section", "Step");
        WebtablesPage.visit();

        // Add a record to the table
        logger.log("Add new record", "Step");
        WebtablesPage.addRecordToTheTable(
            "Antonio",
            "Galán",
            "testcypress@test.com",
            "30",
            "30000",
            "QA");

        // Check that it has been added to the table with all fields reported
        logger.log("Verify that the record is correctly saved in the table", "Verification");
        WebtablesPage.findAndVerifyRecord(
            "Antonio",
            "Galán",
            "testcypress@test.com",
            "30",
            "30000",
            "QA");

        // TODO: Browse it and check that the search is performed correctly (by passing any of the record data as a parameter)
        logger.log("Search a record", "Step");
        WebtablesPage.searchRecord("Antonio");

        //Edit the record
        logger.log("Edit a record", "Step");
        WebtablesPage.editRecord("testcypress@test.com", "Test Name Edition",
            "Test Last Name Edition",
            "testedition@gmail.com",
            "31",
            "31000",
            "Test department edition")

        //Clear the search box
        logger.log("Clear the search box", "Step");
        WebtablesPage.clearSearchBox();

        //Verify that the record is correctly edited
        logger.log("Verify that the record is correctly edited", "Verification");
        WebtablesPage.findAndVerifyRecord(
            "Test Name Edition",
            "Test Last Name Edition",
            "testedition@gmail.com",
            "31",
            "31000",
            "Test department edition");

        //Delete record    
        logger.log("Delete a record", "Step");
        WebtablesPage.deleteRecord("testedition@gmail.com");

        //Verify that the record isnt in the table
        logger.log("Verify that the record disappears", "Verification");
        WebtablesPage.verifyRecordIsntInTable("testedition@gmail.com");
    });
});
