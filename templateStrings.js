function printName(name){
	//let name = process.argv[2];
	let res= `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;
	//console.log(res);
	return res;
}
console.log(printName('aAnand123'));

module.exports.printName = printName;
