function average(...args){
	//console.log(args);
	// let res = args.reduce(function(tot, val){
	// 	return tot + val;
	// 	//console.log(tot, val);
	// }, 0);
	let res = args.reduce( (tot,val) => tot +val , 0);
	//console.log(res);
	if(args.length === 0){
		return 0;
	}
	else{
		return res/(args.length);
	}
}
module.exports.average = average;
//console.log(average(1,2));
