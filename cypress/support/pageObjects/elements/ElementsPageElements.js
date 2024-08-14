class ElementsPageElements {
    static elementsMenuLinks = {
        textBoxFormLink: () => cy.contains('li', 'Text Box'),
        checkBoxFormLink: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
    }

    //Elements of the text box form
    static textBoxFormElements = {
        usernameField: () => cy.get('#userName'),
        emailField: () => cy.get('#userEmail'),
        currentAddressField: () => cy.get('#currentAddress'),
        permanentAddressField: () => cy.get('#permanentAddress'),
        submitButton: () => cy.get('#submit'),
        outputField: () => cy.get('#output .border p')
    }

    //Text box form output elements
    static outputField = {
        name: () => cy.get('#name').invoke('text'),
        email: () => cy.get('#email').invoke('text'),
        currentAddress: () => cy.get('#currentAddress.mb-1').invoke('text'),
        permanentAddress: () => cy.get('#permanentAddress.mb-1').invoke('text')
    }

    //Elements of the check boxes
    static checkBoxElements = {
        toggleButton: () => cy.get('button[aria-label="Toggle"]'),
        checkAllButton: () => cy.contains('.rct-title', 'Home'),
        homeCheckBoxClosed: () => cy.get('rct-icon rct-icon-parent-close'),
        homeCheckBoxOpened: () => cy.get('rct-icon rct-icon-parent-open'),
        expandAllButton: () => cy.get('rct-icon rct-icon-expand-all'),
        collapseAllButton: () => cy.get('rct-icon rct-icon-collapse-all'),
        resultBox: () => cy.get('#result')
    }

    //Checkboxes
    static checkboxes = {
        homeCheckbox: () => cy.get('#tree-node-home'),
        desktopCheckbox: () => cy.contains('.rct-title', 'Desktop'),
        documentCheckbox: () => cy.contains('.rct-title', 'Documents'),
        downloadsCheckbox: () => cy.contains('.rct-title', 'Downloads')
    }

}

export { ElementsPageElements };