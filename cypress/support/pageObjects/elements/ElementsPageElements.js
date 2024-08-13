class ElementsPageElements {
    static elementsMenuLinks = {
        textBoxFormLink: () => cy.contains('li', 'Text Box'),
        checkBoxFormLink: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
    }


    static textBoxFormElements = {
        usernameField: () => cy.get('#userName'),
        emailField: () => cy.get('#userEmail'),
        currentAddressField: () => cy.get('#currentAddress'),
        permanentAddressField: () => cy.get('#permanentAddress'),
        submitButton: () => cy.get('#submit'),
        outputField: () => cy.get('#output .border p')
    }

    static outputField = {
        name: () => cy.get('#name').invoke('text'),
        email: () => cy.get('#email').invoke('text'),
        currentAddress: () => cy.get('#currentAddress.mb-1').invoke('text'),
        permanentAddress: () => cy.get('#permanentAddress.mb-1').invoke('text')
    }

    static checkBoxElements = {
        toggleButton: () => cy.get('.rct-collapse rct-collapse-btn'),
        checkAllButton: () => cy.get('.rct-checkbox'),
        homeCheckBoxClosed: () => cy.get('rct-icon rct-icon-parent-close'),
        homeCheckBoxOpened: () => cy.get('rct-icon rct-icon-parent-open'),
        expandAllButton: () => cy.get('rct-icon rct-icon-expand-all'),
        collapseAllButton: () => cy.get('rct-icon rct-icon-collapse-all'),
        resultBox: () => cy.get('#result')

    }
}

export { ElementsPageElements };