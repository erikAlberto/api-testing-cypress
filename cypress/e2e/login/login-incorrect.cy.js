import endpoint from '../../fixtures/endpoints.json'
import { faker } from '@faker-js/faker'
describe('Login with  user and password correct', () => {
  
    it("Should return Error Message  'Wrong password'", () => {
      cy.request({method:'POST', 
                  url:`${Cypress.config('baseUrl') + endpoint.login}`, 
                  body: {
                    "username": "juan12345886",
                    "password": faker.internet.password()
                  }}).then((response) => {
                    expect(response.status).to.eq(200);
                    console.log(response.body)
                    expect(response.body.errorMessage).to.eq("Wrong password.");
                  })
    })
})