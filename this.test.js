let th = require('./this');

test( 'Should print Ouch!', function(){
	expect(th.kick()).toBe(`Ouch!`);
});

test( 'Should print Ouch!', function(){
	expect(typeof(th.kick)).toBe(`function`);
});
