import { HomePageElements } from '../elements/HomePageElements'

class HomePage {
    static visit() {
        return cy.visit('https://demoqa.com')
    }

    static goToElementsPage() {
        return HomePageElements.homePageLinks.elementsLink().click()
    }

}

export { HomePage };
