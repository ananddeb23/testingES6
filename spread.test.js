let spread = require('./spread');

test( ' Should print minimum ', function(){
	expect(spread.pickMin(3,4,5,-6)).toBe(-6);
});

test( ' Should print minimum ', function(){
	expect(typeof(spread.pickMin(3,4,5,-6))).toBe('number');
});
test( ' Should print minimum ', function(){
	expect(spread.pickMin(5,5,5)).toBe(5);
});
