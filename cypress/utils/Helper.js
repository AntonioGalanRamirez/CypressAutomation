class Helper {
    static checkVisibility(element, shouldBeVisible) {
        if (shouldBeVisible) {
            element.should('be.visible');
        } else {
            element.should('not.be.visible');
        }
    }

    static checkExistence(element, exist) {
        if (exist) {
            element.should('exist');
        } else {
            element.should('not.exist');
        }
    }
}

export default Helper;