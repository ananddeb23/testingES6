//console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(str, username, comment) {
	let str0 =str[0];
	let str1 = str[1];
	// what goes here?
	// don't forget to return the escaped string!
	// console.log(str0);
	// console.log(str1);
	// console.log(username, comment);
	comment = comment.replace(/&/g, '&amp;')
	.replace(/&/g, '&amp;')
	.replace(/'/g, '&apos;')
	.replace(/"/g, '&quot;')
  .replace(/>/g, '&gt;');
	// comment = comment.replace(/&/g, '&amp;');
	// comment = comment.replace(/'/g, '&apos;');
	// comment = comment.replace(/"/g, '&quot;');
	// comment = comment.replace(/</g, '&lt;');
	// comment = comment.replace(/>/g, '&gt;');
	// I could also have used chaining

	return `${str0}${username}${str1}${comment}"`;
}
module.exports.html = html;
let name = 'Anand';
let comment = `<h1> </h1> " ' &tags are great`;
console.log(html`<b>${name} says</b> ${comment}"`);
//console.log(html(['<b>',' says</b>: "'],'domenic',`html is a good tag`));
// "<b>l33t haxor says</b>: \"\"&lt;script&gt;alert(&quot;pwned!&quot;)&lt;/script&gt;\"";
// "<b>l33t haxor says</b>: \"&lt;script&gt;alert(&quot;pwned!&quot;)&lt;/script&gt;\"";
