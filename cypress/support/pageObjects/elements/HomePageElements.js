class HomePageElements {
    static homePageLinks = {
        homeLink: () => cy.get('a[href="/"]'),
        elementsLink: () => cy.contains('h5', 'Elements')
    }


}

export { HomePageElements };