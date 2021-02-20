const assert = require('chai').assert;

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('should return 3', () => {
            assert.equal([1, 2, 3].indexOf(3), 2);
        });
    });
});
