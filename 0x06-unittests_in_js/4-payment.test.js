const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
        const consoleSpy = sinon.spy(console);
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

        calculateNumberStub.returns(10);
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
        expect(calculateNumberStub.callCount).to.equal(1);

        expect(consoleSpy.log.calledOnceWith('The total is: 10')).to.be.true;
        expect(consoleSpy.log.callCount).to.equal(1);

        consoleSpy.log.restore();
    });
});