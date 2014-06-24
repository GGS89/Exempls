
function Duck(){
	flyBeheivor.prototype = new flyBeheivor();
	quarkBeheivor.prototype = new quarkBeheivor();

	this.setFlyBihevior = function(fb){
		flyBeheivor = fb;
	}
	this.setQuarkBihevior = function(qb){
		quarkBeheivor = qb;
	}

	this.preformFly = function(){
		flyBeheivor.fly();
	}
	this.preformQuark = function(){
		quarkBeheivor.quark();
	}

	this.swim = function(){
		console.log("I can swim!");
	}
}

//Beheivor interfaise
//Fly interfase
function flyBeheivor(){
	this.fly = function(){
	}
}

flyWithWings.prototype = new flyBeheivor();

function flyWithWings(){
	this.fly = function(){
		console.log("I can fly.");
	}
}
function flyNoWay(){
	this.fly = function(){
		console.log("I can`t fly!");
	}
}

//Quark interfase
function quarkBeheivor(){
	this.quark = function(){
	}
}

quarkBeheivor.prototype = new flyBeheivor();

function Quark(){
	this.quark = function(){
		console.log("quark quark quark");
	}
}
function Squark(){
	this.quark = function(){
		console.log("squark squark squark");
	}
}

malarDack.prototype = new Duck();

function malarDack(){
	quarkBeheivor = new Quark();
	flyBeheivor = new flyWithWings();
}



var malar = new malarDack();
console.log(malar.preformFly());
console.log(malar.preformQuark());
console.log(malar.setQuarkBihevior(new Squark()));
console.log('Aftes set:');
console.log(malar.preformQuark());