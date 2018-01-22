// let reducer = (accumulator, currentValue) => accumulator + currentValue;
// let mapper = (word) => word[0];
function firstLetter(args){

	if(args.length === 0){
		return '';
	}
	// let res = args.map(function(val){
	// 	console.log(val[0]);
	// 	return val[0];
	// }).reduce(reducer);
	let res = args.map((val) => val[0]).
	reduce((accumulator, currentValue) => accumulator + currentValue);
	console.log(res);
	return `[${args}] becomes "${res}"`;
}
module.exports.firstLetter = firstLetter;
/*let inputs = process.argv.slice(2);
let result =  inputs.map(mapper).reduce(reducer);
console.log(`[${inputs}] becomes "${result}"`);*/
firstLetter("Anand", "Shanker");
