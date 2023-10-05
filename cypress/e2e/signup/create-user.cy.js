import endpoint from '../../fixtures/endpoints.json'
import { faker } from '@faker-js/faker'
describe('create user', () => {
  
  it('Should response body be empty string', () => {
    cy.request({method:'POST', 
                url: `${Cypress.config('baseUrl') + endpoint.signup}`, 
                body: {
                  "username": faker.internet.userName(),
                  "password": "maria"
                }})
                .then((response) => {
                  expect(response.status).to.eq(200);
                  console.log(response.body)
                  expect(response.body).to.eq("");
                })
  })

})