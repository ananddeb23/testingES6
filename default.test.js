let def = require('./default');

describe('For differnt input combinations', () => {
test(' Must return midpoint correctly for two positive numbers ', () => expect(def.midpoint(2,4)).toBe(3.0));
test(' Must return midpoint correctly for one positive and one negative number ', () => expect(def.midpoint(-2,4)).toBe(1));
test(' Must return midpoint correctly for two negative  numbers ', () => expect(def.midpoint(-2,-4)).toBe(-3.0));
test(' Must not throw exception if undefined is passed and use default arguments', () => expect(def.midpoint(undefined,0)).toBe(0));
test(' Must not throw exception if no arguments passed and use default arguments', () => expect(def.midpoint()).toBe(0.5));

});

describe('Checking the output returned', () => {
  test(' Must return a number as a result ', () => expect(typeof(def.midpoint(1,2))).toBe('number'));
  });
