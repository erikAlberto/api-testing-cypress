import endpoint from '../../fixtures/endpoints.json'
describe('create user already exist', () => {
  
    it('Should return Error Message', () => {
      cy.request({method:'POST', 
                  url:`${Cypress.config('baseUrl') + endpoint.signup}`, 
                  body: {
                    "username": "juan12345886",
                    "password": "maria"
                  }}).then((response) => {
                    expect(response.status).to.eq(200);
                    console.log(response.body)
                    expect(response.body.errorMessage).to.eq("This user already exist.");
                  })
    })

  })