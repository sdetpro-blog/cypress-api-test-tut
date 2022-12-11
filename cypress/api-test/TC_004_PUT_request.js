describe('Test PUT method request', () => {
    it('should be able to send a request with PU method', () => {
        let reqBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            header: {'Content-type': 'application/json; charset=UTF-8'},
            body: reqBody
        }).then(res => {
            let {status} = res
            let resBody = res.body
            let {userId, id, title, body} = resBody
            expect(status).to.eq(200, 'Verifing response header')
            expect(userId).to.eq(reqBody.userId, 'Verifing userId')
            expect(id).to.eq(reqBody.id, 'Verifing id')
            expect(title).to.eq(reqBody.title, 'Verifing title')
            expect(body).to.eq(reqBody.body, 'Verifing body')
        })
    });
});