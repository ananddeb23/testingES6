function midpoint(lower = 0, upper = 1){
	if(typeof(lower) === typeof(upper) && typeof(lower) === 'number'){
		return lower + ((upper - lower)/2);
	}
	else{
		return -1;
	}
}
module.exports.midpoint = midpoint;
//console.log(midpoint(2,4));
