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
    describe('GET /available_payments', () => {
        it('correct status code 200', (done) => {
            request.get('http://localhost:7865/available_payments', (err, res, body) => {
                if(err){
                    done(err);
                }
                expect(res.statusCode).to.equal(200);
                done();
            });
        });
        it('correct resposne JSON string', (done) => {
            request.get('http://localhost:7865/available_payments', (err, res, body) => {
                if(err){
                    done(err);
                }
                expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
                done();
            });
        });
        it('corrected response JSON parsed!', (done) => {
            request.get('http://localhost:7865/available_payments', (err, res, body) => {
                if(err){
                    done(err);
                }
                expect(JSON.parse(body)).to.deep.equal({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
        });
    });
    describe('POST /login', () => {
        it('correct status code 200', (done) => {
            request.post('http://localhost:7865/login', {
                json: {
                    userName: 'Betty',
                }
            }, (err, res, body) => {
                if(err){
                    done(err);
                }
                expect(res.statusCode).to.equal(200);
                done();
            });
        });
        it('correct response', (done) => {
            request.post('http://localhost:7865/login', {
                json: {
                    userName: 'Betty',
                }
            }, (err, res, body) => {
                if(err){
                    done(err);
                }
                expect(body).to.equal('Welcome Betty');
                done();
            });
        });
    });
});