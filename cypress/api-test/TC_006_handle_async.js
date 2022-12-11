import {DEFAULT} from "../utils/Method";

describe('Handling async request in Cypress', () => {
    it('should be able to wait until a request resolved', () => {
        // CRUD
        // let url = "https://jsonplaceholder.typicode.com/posts"
        let url = Cypress.env("baseUrl")
        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }
        let createdPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        let updatedPostBody = {
            id: 1,
            title: 'foooooooooooooo',
            body: 'bar',
            userId: 1,
        }

        cy.createPost(createdPostBody).then(res => {
            cy.getPost((Number(res.body.id) - 1).toString())
                .then(res => {
                    cy.request({
                        method: "PUT",
                        url: url + "/" + res.body.id,
                        headers: header,
                        body: updatedPostBody
                    }).then(res => {
                        cy.request({
                            method: "DELETE",
                            url: url + "/" + res.body.id,
                        }).then(res => {
                            cy.log(JSON.stringify(res))
                        })
                    })
                })
        })
    });
});