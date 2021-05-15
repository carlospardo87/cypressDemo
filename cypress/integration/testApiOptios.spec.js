var using = require('jasmine-data-provider');






describe(`Create User Stories`, () => {


    using(
        [
            { name: "morpheus", job: "leader" },
            { name: "morpheus1", job: "leader1" },
            { name: "morpheus2", job: "leader2" },
        ],

        (data) => {

            it(`Create User: ${data.name} and Job: ${data.job}`, () => {

                cy.request
                    ({
                        method: 'POST',
                        url: 'https://reqres.in/api/users',
                        form: true,
                        body: data
                    })
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
    