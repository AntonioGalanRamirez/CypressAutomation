/* eslint-disable no-undef */
class CheckboxElements {
    static elementsMenuLinks = {
        textBoxFormLink: () => cy.contains('li', 'Text Box'),
        checkBoxFormLink: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
    }

    //Elements of the check boxes
    static checkboxesElements = {
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

export { CheckboxElements };