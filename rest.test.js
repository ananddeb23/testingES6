let rest = require('./rest');


test(' Must return correct average for positive numbers ', () => expect(rest.average(1,2,3,4)).toBe(2.5));
test(' Must return correct average for negative numbers ', () => expect(rest.average(-1,-2,-3,-4)).toBe(-2.5));
test(' Must return correct average when both positive and negative numbers are given', () => expect(rest.average(1,-2,3,0)).toBe(0.5));
test(' Must return number ', () => expect(typeof(rest.average(1,2,3,4))).toBe('number'));
test(' Must not throw exception on 0 arguments ', () => expect(rest.average()).toBe(0));
