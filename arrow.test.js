let arrow= require('./arrow');

test( ' Should return concatenation of first letters of every array element ', function(){
	expect(arrow.firstLetter(['anand','shanker'])).toBe(`[anand,shanker] becomes "as"`);
});

test( ' Should return correct for one empty argument ', function(){
	expect(arrow.firstLetter(['anand',' '])).toBe(`[anand, ] becomes "a "`);
});

test( ' Should handle empty array and return empty array ', function(){
	expect(arrow.firstLetter([])).toBe('');
});

test(' Length of array should be equal to length of input', () =>{
	expect(arrow.firstLetter(['asd', 'dfs', 'bfs']).length).toBe(['asd', 'dfs', 'bfs'].length)
});

test(' Return type must be string', () =>{
	expect(typeof(arrow.firstLetter(['asd', 'dfs', 'bfs']))).toBe('string');
});
