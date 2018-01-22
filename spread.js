let input = process.argv.slice(2);
//console.log(...input);
let res = Math.min(...input);
console.log(`The minimum of [${input}] is ${res}`);


function pickMin(...args){
	let res = Math.min(...args);
	console.log(`The minimum of [${input}] is ${res}`);
	return res;
}
module.exports.pickMin = pickMin;
