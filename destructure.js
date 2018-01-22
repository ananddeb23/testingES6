function printNeeded(...args){
//let userArray = process.argv.slice(2);
	let userArray = args;
	//console.log(userArray);
	let res = {};
	[, res.username, res.email] = userArray;
	console.log(res);
	return res;
}

console.log(printNeeded(1,'2','3').length);
module.exports.printNeeded = printNeeded;
