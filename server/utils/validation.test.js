const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', () => {
    it('should reject non-string value', () => {
        var name = 124;
        var room = false;
        var result = (isRealString(name) || isRealString(room));
        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var name = '   ';
        var result = isRealString(name);
        expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var name = '  testing  ';
        var result = isRealString(name);
        expect(result).toBe(true);
    });    
});