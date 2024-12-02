const chai = require("chai");
const calculateNumber = require("./1-calcul");

describe('testing calculateNumber with SUM as type', function(){
    it('calculateNumber(SUM, 1, 3) should return 4', function(){
        chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('calculateNumber(SUM, 1.5, 3) should return 5', function(){
        chai.expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
    });

    it('calculateNumber(SUM, 1.2, 3) should return 4', function(){
        chai.expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });

    it('calculateNumber(SUM, 1, 3.1) should return 4', function(){
        chai.expect(calculateNumber('SUM', 1, 3.1)).to.equal(4);
    });

    it('calculateNumber(SUM, 1, 3.6) should return 5', function(){
        chai.expect(calculateNumber('SUM', 1, 3.6)).to.equal(5);
    });

    it('calculateNumber(SUM, 1.2, 3.6) should return 6', function(){
        chai.expect(calculateNumber('SUM', 1.5, 3.6)).to.equal(6);
    });
    
    it('calculateNumber(SUM, 1.2, 3.3) should return 4', function(){
        chai.expect(calculateNumber('SUM', 1.2, 3.3)).to.equal(4);
    });
});

describe('testing calculateNumber with SUBTRUCT as type', function(){
    it('calculateNumber(SUBTRACT, 1, 3) should return -2', function(){
        chai.expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('calculateNumber(SUBTRACT, 1.5, 3) should return -1', function(){
        chai.expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
    });

    it('calculateNumber(SUBTRACT, 1.2, 3) should return -2', function(){
        chai.expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2)
    });

    it('calculateNumber(SUBTRACT, 1, 3.1) should return -2', function(){
        chai.expect(calculateNumber('SUBTRACT', 1, 3.1)).to.equal(-2);
    });

    it('calculateNumber(SUBTRACT, 1, 3.6) should return -3', function(){
        chai.expect(calculateNumber('SUBTRACT', 1, 3.6)).to.equal(-3);
    });

    it('calculateNumber(SUBTRACT, 1.2, 3.6) should return -2', function(){
        chai.expect(calculateNumber('SUBTRACT', 1.5, 3.6)).to.equal(-2);
    });
    it('calculateNumber(SUBTRACT, 1.2, 3.3) should return -2', function(){
        chai.expect(calculateNumber('SUBTRACT', 1.2, 3.3)).to.equal(-2);
    });
});

describe('testing calculateNumber type=DIVIDE', function(){
    it('calculateNumber(DIVIDE, 1, 0) should return Error', function(){
        chai.expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
    it('calculateNumber(DIVIDE, 1, 0.1) should return Error', function(){
        chai.expect(calculateNumber('DIVIDE', 1, 0.1)).to.equal('Error');
    });
    it('calculateNumber(DIVIDE, 1, 0.6) should return -1', function(){
        chai.expect(calculateNumber('DIVIDE', 1, 0.6)).to.equal(1);
    });
    it('calculateNumber(DIVIDE, 4, 2) should return 2', function(){
        chai.expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('calculateNumber(DIVIDE, 1.5, 2) should return 1', function(){
        chai.expect(calculateNumber('DIVIDE', 1.5, 2)).to.equal(1);
    });
    it('calculateNumber(DIVIDE, 1.2, 2) should return 0.5', function(){
        chai.expect(calculateNumber('DIVIDE', 1.2, 2)).to.equal(0.5);
    });

    it('calculateNumber(DIVIDE, 1, 2.1) should return 0.5', function(){
        chai.expect(calculateNumber('DIVIDE', 1, 2.1)).to.equal(0.5);
    });

    it('calculateNumber(DIVIDE, 2, 3.6) should return 0.5', function(){
        chai.expect(calculateNumber('DIVIDE', 2, 3.6)).to.equal(0.5);
    });
    it('calculateNumber(DIVIDE, 1.2, 3.6) should return 0.25', function(){
        chai.expect(calculateNumber('DIVIDE', 1.2, 3.6)).to.equal(0.25);
    });
    it('calculateNumber(DIVIDE, 1.2, 2.3) should return 0.5', function(){
        chai.expect(calculateNumber('DIVIDE', 1.2, 2.3)).to.equal(0.5);
    });
});
describe('testing calculateNumber type=DIVIDE and return Error', function(){
    it('calculateNumber(DIVIDE, 1, 0) should return Error', function(){
        chai.expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
    it('calculateNumber(DIVIDE, 1, 0.1) should return Error', function(){
        chai.expect(calculateNumber('DIVIDE', 1, 0.1)).to.equal('Error');
    });
});