let destruc = require('./destructure');

test(' return type must be object ',function(){
	expect(typeof(destruc.printNeeded(1, 'jdoe', 'jdoe@example.com', 'John', 'Doe'))).toBe('object');
});

test(' when no arguments are passed the returning object should have undefined values ',function(){
	expect(destruc.printNeeded().email).toBe(undefined);
});
test('output should have email as property',function(){
	expect(destruc.printNeeded(1, 'jdoe', 'jdoe@example.com', 'John', 'Doe').email).toBe(`jdoe@example.com`);
});
test('output should have both email and username from given input object',function(){
	expect(destruc.printNeeded(1, 'jdoe', 'jdoe@example.com', 'John', 'Doe')).toEqual({ email: `jdoe@example.com`, username: 'jdoe'});
});
test(' output should have username as property ',function(){
	expect(destruc.printNeeded(1, 'jdoe', 'jdoe@example.com', 'John', 'Doe').username).toBe(`jdoe`);
});

test(' output must not have name as property ',function(){
	expect(destruc.printNeeded(1, 'jdoe', 'jdoe@example.com', 'John', 'Doe').name).toBe(undefined);
});
