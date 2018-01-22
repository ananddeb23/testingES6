let index = require('./index');

test( ' Should add two numbers ', function(){
	expect(index.sum(2,3)).toBe(5);
});
