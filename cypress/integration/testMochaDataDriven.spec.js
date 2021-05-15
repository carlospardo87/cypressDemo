/// <reference types="cypress" />


var using = require('mocha-data-driven');  // package mocha-data-driven allows us to use different data set for a same test




describe(`Create User with Mocha-Data-Driven`, () => {


    using(

        [
            { name: "morpheus", job: "leader" },
            { name: "morpheus1", job: "leader1" },
            { name: "morpheus2", job: "leader2" },
            { name: "morpheus3", job: "leader3" },
        ],

        () => {

            it(`Create User: {name} and Job: {job}`, (data) => {   // Parameters into the {} makes reference to value nto the JSON data set of the key defined

                cy
                    .request('POST', 'https://reqres.in/api/users', data)   // This method recive Method(GET,POST...) , EndPoint, Body("data" represent each object into the JSON data set)
                    .then((response) => {
                        expect(response.body).to.have.property('name', data.name)
                        expect(response.body).to.have.property('job', data.job)
                        expect(response.body).to.have.property('job', data.job)
                        expect(response.status).to.equal(201)
                        expect(response.headers['content-type']).to.contain('application/json')
                    })

            });
        })

});