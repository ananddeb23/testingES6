let foot = {
	kick: function () {
		this.yelp = "Ouch!";
		setImmediate( () => {console.log(this.yelp);
			return  "heha";
		});}
};
console.log(foot.kick());
let b = foot.kick();
//console.log(b);

module.exports.kick = foot.kick;
