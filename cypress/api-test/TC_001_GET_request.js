describe('Test GET request', () => {
    it('should be able to send GET request and verify the response', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(response => {
           expect(response.status).to.eq(400)
           expect(response.body.length).to.eq(100)
        })
    })
})