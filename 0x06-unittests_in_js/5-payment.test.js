const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
    beforeEach(() => {
        if(!consoleSpy){
            consoleSpy = sinon.spy(console);
        }
    });
    afterEach(() => {
        if(consoleSpy){
            consoleSpy.log.resetHistory();
        }
    });
    it('sendPaymentRequestToAPI(100, 20) should logs The total is: 120', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.log.calledWith('The total is: 120')).to.be.true;
        expect(consoleSpy.log.calledOnce).to.be.true;
    });
    it('sendPaymentRequestToAPI(10, 10) should log The total is: 20', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.log.calledWith('The total is: 20')).to.be.true;
        expect(consoleSpy.log.calledOnce).to.be.true;
    });
    after(() => {
        if(consoleSpy){
            consoleSpy.log.restore();
        }
    });
});