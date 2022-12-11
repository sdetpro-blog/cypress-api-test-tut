let header = {
    'Content-type': 'application/json; charset=UTF-8',
}

/**
 * @memberOf cy
 * @method getPost
 * @param {string} postNum
 * */
Cypress.Commands.add("getPost", postNum => {
    cy.request({
        method: 'GET',
        url: Cypress.env("baseUrl") + "/" + postNum
    })
})