class WebtablesElements {
    //Action buttons
    static actionButtons = {
        addNewRecordButton: () => cy.get('#addNewRecordButton'),
        editRecord: () => cy.get('span[id^="edit-record"]'),
        deleteRecord: () => cy.get('span[id^="delete-record"]')
    }

    static registrationForm = {
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        userEmail: () => cy.get('#userEmail'),
        age: () => cy.get('#age'),
        salary: () => cy.get('#salary'),
        department: () => cy.get('#department'),
        submitButton: () => cy.get('#submit')
    }

    static tableElements = {
        tableBody: () => cy.get('.rt-tbody .rt-tr'),
        tableRow: () => cy.get('.rt-table .rt-tbody .rt-tr-group'),
        tableColumn: () => cy.get('.rt-td'),
        tableSearchBox: () => cy.get('#searchBox')
    }

}
export { WebtablesElements };