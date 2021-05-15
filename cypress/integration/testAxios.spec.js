/// <reference types="cypress" />

const axios = require('axios');
var using = require('jasmine-data-provider');

using(
    [
        { name: "morpheus", job: "leader" },
        { name: "morpheus1", job: "leader1" },
        { name: "morpheus2", job: "leader2" },
    ],

    (data) => {

        it(`AXIOS Create User: ${data.name} and Job: ${data.job}`, () => {

            axios.post('https://reqres.in/api/users', data)
                .then(function (response) {
                    console.log(response);
                        expect(response.body).to.have.property('name', data.name)
                        expect(response.body).to.have.property('job', data.job)
                        expect(response.body).to.have.property('job', data.job)
                        expect(response.status).to.equal(204)
                        expect(response.headers['content-type']).to.contain('application/json')
                })
                .catch(function (error) {
                    console.log(error);
                });

        });
    })
