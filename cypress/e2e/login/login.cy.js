import endpoint from '../../fixtures/endpoints.json'
describe('Login with  user and password correct', () => {
  
    it('Should return Auth Token', () => {
      cy.request({method:'POST', 
                  url:`${Cypress.config('baseUrl') + endpoint.login}`, 
                  body: {
                    "username": "juan12345886",
                    "password": "maria"
                  }}).then((response) => {
                    expect(response.status).to.eq(200);
                    console.log(response.body)
                    expect(response.body).includes("Auth_token");
                  })
    })
})