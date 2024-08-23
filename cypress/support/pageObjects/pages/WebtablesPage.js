import { WebtablesElements } from "../elements/WebtablesElements"

class WebtablesPage {
    static visit() {
        return cy.visit('https://demoqa.com/webtables');
    }

    //Action methods
    static addRecordToTheTable(name, lastName, userEmail, age, salary, department) {
        WebtablesElements.actionButtons.addNewRecordButton().click();
        WebtablesPage.fillRegistrationForm(name, lastName, userEmail, age, salary, department)
        WebtablesElements.registrationForm.submitButton().click();
    }

    static searchRecord(dataSearched) {
        WebtablesElements.tableElements.tableSearchBox().type(dataSearched);
        WebtablesElements.tableElements.tableBody().not('.-padRow').each(($row) => {
            cy.wrap($row).should('contain.text', dataSearched);
        });
    }

    static editRecord(userEmail, newName, newLastName, newUserEmail, newAge, newSalary, newDepartment) {
        WebtablesElements.tableElements.tableColumn().contains(userEmail).then(($emailCell) => {
            cy.wrap($emailCell).parent().within(() => {
                WebtablesElements.actionButtons.editRecord().click();
            });

            WebtablesPage.clearRegistrationForm();
            WebtablesPage.fillRegistrationForm(newName, newLastName, newUserEmail, newAge, newSalary, newDepartment);
            WebtablesElements.registrationForm.submitButton().click();
        });
    }

    static deleteRecord(userEmail) {
        WebtablesElements.tableElements.tableColumn().contains(userEmail).then(($emailCell) => {
            cy.wrap($emailCell).parent().within(() => {
                WebtablesElements.actionButtons.deleteRecord().click();
            });
        });
    }

    //Registration Form methods
    static fillRegistrationForm(name, lastName, userEmail, age, salary, department) {
        WebtablesElements.registrationForm.firstName().type(name);
        WebtablesElements.registrationForm.lastName().type(lastName);
        WebtablesElements.registrationForm.userEmail().type(userEmail);
        WebtablesElements.registrationForm.age().type(age);
        WebtablesElements.registrationForm.salary().type(salary);
        WebtablesElements.registrationForm.department().type(department);
    }

    static clearRegistrationForm() {
        WebtablesElements.registrationForm.firstName().clear();
        WebtablesElements.registrationForm.lastName().clear();
        WebtablesElements.registrationForm.userEmail().clear();
        WebtablesElements.registrationForm.age().clear();
        WebtablesElements.registrationForm.salary().clear();
        WebtablesElements.registrationForm.department().clear();
    }

    static clearSearchBox() {
        WebtablesElements.tableElements.tableSearchBox().clear();
    }

    //Verification methods
    static findAndVerifyRecord(name, lastName, userEmail, age, salary, department) {
        WebtablesElements.tableElements.tableColumn().contains(userEmail).then(($emailCell) => {
            cy.wrap($emailCell).parent().within(() => {
                WebtablesElements.tableElements.tableColumn().eq(0).should('have.text', name);
                WebtablesElements.tableElements.tableColumn().eq(1).should('have.text', lastName);
                WebtablesElements.tableElements.tableColumn().eq(2).should('have.text', age);
                WebtablesElements.tableElements.tableColumn().eq(4).should('have.text', salary);
                WebtablesElements.tableElements.tableColumn().eq(5).should('have.text', department);
            });
        });
    }

    static verifyRecordIsntInTable(userEmail) {
        WebtablesElements.tableElements.tableBody().not('.-padRow').each(($row) => {
            cy.wrap($row).should('not.contain.text', userEmail);
        });
    }
}

export { WebtablesPage };