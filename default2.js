function rep(str, num){
	if(typeof(num) === 'number' && num >=0){
		return str+ '!'.repeat(num);

	}
	else{
		return str+ '!'.repeat(str.length);
	}
}

module.exports.rep = rep;
