let tag = require('./tag');

// test('Output with appropriate replace ',function(){
// 	expect(tag.html(['<b>',' says</b>: "'],'domenic',`<dl> is a fun tag"`)).toBe(`<b>domenic says</b>: "&lt;dl&gt; is a fun tag"`);
//
// });
let name = 'Anand';
let comment = '<h1> </h1> tags are great';
//console.log(html`<b>${name} says</b> ${comment}"`);
test('Replace all input html unsafe tags with safe tags ',function(){
	expect(tag.html`<b>${name} says</b> ${comment}"`).toBe(`<b>Anand says</b> <h1&gt; </h1&gt; tags are great"`);

});
 let name1 = 'Anand';
let comment1 = 'tags are great';
test('Work correctly for no input unsafe tage ',function(){
	expect(tag.html`<b>${name1} says</b> ${comment1}"`).toBe(`<b>Anand says</b> tags are great"`);

});

let name2 = 'Anand';
let comment2 = '<h1> </h1> tags are great';
test('Work correctly for multiple tags ',function(){
 expect(tag.html`<b>${name2} says</b> ${comment2}"`).toBe(`<b>Anand says</b> <h1&gt; </h1&gt; tags are great"`);

});
let name3 = 'Anand';
let comment3 = `<h1> </h1> " ' &tags are great`;
test('Work correctly for all types of  tags ',function(){
 expect(tag.html`<b>${name3} says</b> ${comment3}"`).toBe(`<b>Anand says</b> <h1&gt; </h1&gt; &quot; &apos; &amp;amp;tags are great"`);

});

// test('Test for expected formatting ',function(){
// 	expect(tag.html('')).toBe(``);
//
// });
//
// test('Test for more than once occurence of html unsafe charactars ',function(){
// 	expect(tag.html('')).toBe(``);
//
// });
