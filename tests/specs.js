'use strict';

describe('My addition function: ', function () {

    it('5 plus 3 should equal 8', function () {
        var total = addNumbers(5,5);
        expect(total).toBe(8);
    });

    it('4 plus 1 should equal 5', function () {
        var total = addNumbers(4,1);
        expect(total).toBe(5);
    });

});

describe('My muliplication function: ', function () {

    it('5 multiplied times 3 should equal 15', function () {
        var total = multiplyNumbers(5,3);
        expect(total).toBe(15);
    });

    it('4 multiplied times 1 should equal 4', function () {
        var total = multiplyNumbers(4,1);
        expect(total).toBe(4);
    });

});

