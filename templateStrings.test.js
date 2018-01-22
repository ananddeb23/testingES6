let templateStr = require('./templateStrings');

test( 'Should print in the lowercase', function(){
	expect(templateStr.printName('Anand')).toBe(`Hello, Anand!
Your name lowercased is "anand".`);
});
test( 'Should print in lowercase even if input is in lowercase', function(){
	expect(templateStr.printName('anand')).toBe(`Hello, anand!
Your name lowercased is "anand".`);
});
test( 'Should ignore numbers if present in string', function(){
	expect(templateStr.printName('anand123')).toBe(`Hello, anand123!
Your name lowercased is "anand123".`);
});
test( 'Should return empty for empty input', function(){
	expect(templateStr.printName('')).toBe(`Hello, !
Your name lowercased is "".`);
});
// test for undefined and null
