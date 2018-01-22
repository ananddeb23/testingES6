let def = require('./default2');

describe(' types of input and corresponding output', () =>{
it(' when frist argument is a string and arg2 is a positive number, output append arg2 times exclamation mark to arg1 ', () => expect(def.rep(`Hi`, 5)).toBe(`Hi!!!!!`));
it(' when second argument is empty, then output exclamation length times to arg1 ', () => expect(def.rep(`Hi`)).toBe(`Hi!!`));
it('  when second argument is undefined, then output exclamation length times to arg1 ', () => expect(def.rep(`Hello?`, undefined)).toBe(`Hello?!!!!!!`));
it('  when second argument is negative, then output exclamation length times to arg1 ', () => expect(def.rep(`Hello?`, -2)).toBe(`Hello?!!!!!!`));
});
describe(' Output checking ', () =>{
it(' Output type must be a string  ', () => expect(typeof(def.rep(`Hi`))).toBe('string'));
});
