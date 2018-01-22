function callback(users){
	console.log(users.length);
}
function bingo(){
	let users = [];
	for(let i=0; i< 5; i++){
		(setTimeout(function(){
			users.push(1);
			if(users.length === 5){console.log(users);
				callback(users);}
		}));
	}
	return users;
}


console.log('asguard',bingo());
