let program = require('./program');

test( ' Should print to console ', function(){
	expect(program.print()).toBe('HELLO ES6');
});

test( ' Should print to console ', function(){
	expect(program.print()).not.toBe('HELLO eS6');
});
