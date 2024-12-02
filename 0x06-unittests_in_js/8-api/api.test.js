const { expect } = require('chai');
const request = require('request');

describe('Integration Test', () => {
    describe('Index Page', () => {
        it('Status Code 200', (done) => {
            request.get('http://localhost:7865', (err , res , body) => {
                if(err){
                    done(err);
                }
                expect(res.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
        });
    });
});