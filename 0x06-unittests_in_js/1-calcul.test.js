const assert = require('assert');
const calculateNumber = require("./1-calcul");

describe('testing calculateNumber', function(){
    it('calculateNumber(SUM, 1, 3) should return 4', function(){
        assert.equal(calculateNumber('SUM', 1, 3), 4);
    });

    it('calculateNumber(SUM, 1.5, 3) should return 5', function(){
        assert.equal(calculateNumber('SUM', 1.5, 3), 5);
    });

    it('calculateNumber(SUM, 1.2, 3) should return 4', function(){
        assert.equal(calculateNumber('SUM', 1.2, 3), 4);
    });

    it('calculateNumber(SUM, 1, 3.1) should return 4', function(){
        assert.equal(calculateNumber('SUM', 1, 3.1), 4);
    });

    it('calculateNumber(SUM, 1, 3.6) should return 5', function(){
        assert.equal(calculateNumber('SUM', 1, 3.6), 5);
    });

    it('calculateNumber(SUM, 1.2, 3.6) should return 6', function(){
        assert.equal(calculateNumber('SUM', 1.5, 3.6), 6);
    });
    
    it('calculateNumber(SUM, 1.2, 3.3) should return 4', function(){
        assert.equal(calculateNumber('SUM', 1.2, 3.3), 4);
    });
    // 
    it('calculateNumber(SUBTRACT, 1, 3) should return -2', function(){
        assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('calculateNumber(SUBTRACT, 1.5, 3) should return -1', function(){
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3), -1);
    });

    it('calculateNumber(SUBTRACT, 1.2, 3) should return -2', function(){
        assert.equal(calculateNumber('SUBTRACT', 1.2, 3), -2);
    });

    it('calculateNumber(SUBTRACT, 1, 3.1) should return -2', function(){
        assert.equal(calculateNumber('SUBTRACT', 1, 3.1), -2);
    });

    it('calculateNumber(SUBTRACT, 1, 3.6) should return -3', function(){
        assert.equal(calculateNumber('SUBTRACT', 1, 3.6), -3);
    });

    it('calculateNumber(SUBTRACT, 1.2, 3.6) should return -2', function(){
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.6), -2);
    });
    it('calculateNumber(SUBTRACT, 1.2, 3.3) should return -2', function(){
        assert.equal(calculateNumber('SUBTRACT', 1.2, 3.3), -2);
    });
    //
    it('calculateNumber(DIVIDE, 1, 0) should return Error', function(){
        assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
    it('calculateNumber(DIVIDE, 1, 0.1) should return Error', function(){
        assert.equal(calculateNumber('DIVIDE', 1, 0.1), 'Error');
    });
    it('calculateNumber(DIVIDE, 1, 0.6) should return -1', function(){
        assert.equal(calculateNumber('DIVIDE', 1, 0.6), 1);
    });
    it('calculateNumber(DIVIDE, 4, 2) should return 2', function(){
        assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('calculateNumber(DIVIDE, 1.5, 2) should return 1', function(){
        assert.equal(calculateNumber('DIVIDE', 1.5, 2), 1);
    });

    it('calculateNumber(DIVIDE, 1.2, 2) should return 0.5', function(){
        assert.equal(calculateNumber('DIVIDE', 1.2, 2), 0.5);
    });

    it('calculateNumber(DIVIDE, 1, 2.1) should return 0.5', function(){
        assert.equal(calculateNumber('DIVIDE', 1, 2.1), 0.5);
    });

    it('calculateNumber(DIVIDE, 2, 3.6) should return 0.5', function(){
        assert.equal(calculateNumber('DIVIDE', 2, 3.6), 0.5);
    });

    it('calculateNumber(DIVIDE, 1.2, 3.6) should return 0.25', function(){
        assert.equal(calculateNumber('DIVIDE', 1.2, 3.6), 0.25);
    });
    it('calculateNumber(DIVIDE, 1.2, 2.3) should return 0.5', function(){
        assert.equal(calculateNumber('DIVIDE', 1.2, 2.3), 0.5);
    });
});