const assert = require('assert');
const request = require('supertest');
const app = require('../../app');


describe("Web-Scrap App", ()=>{

    it("Api Health request /api/health", done => {

        request(app)
            .get('/api/health')
            .end((error, response) => {

                assert(response.body.status === "UP!");
                done();

        });
    });

    it("Api ycombinator request /api/ycombinator", done => {

        request(app)
            .get('/api/ycombinator')
            .end((error, response) => {

                assert(response.body.status === "SUCCESS");
                done();

            });
    });

});
