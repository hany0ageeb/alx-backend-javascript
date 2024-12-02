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
    describe('GET /cart/:id', () => {
        it('status code 200', (done) => {
            request.get('http://localhost:7865/cart/1', (err, res, body) => {
                if(err){
                    done(err);
                }
                expect(res.statusCode).to.equal(200);
                expect(body).to.equal(`Payment methods for cart 1`);
                done();
            });
        });
        it('status code 404', (done) => {
            request.get('http://localhost:7865/car/hello', (err, res, body) => {
                if(err){
                    done(err);
                }
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
        it('status code 404', (done) => {
            request.get('http://localhost:7865/cart/1a', (err, res, body) => {
                if(err){
                    done(err);
                }
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
    });
});