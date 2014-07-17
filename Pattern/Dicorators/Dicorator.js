function Beverage(){
	this.discription = "Unknown Beverage"
	this.coast = function(){};
	this.getDiscription = function(){
		return this.discription;
	};
}

condimentDecorator.prototype = new Beverage();

function condimentDecorator(){
	this.getDiscription = function(){};
}

Espresso.prototype = new Beverage();
DarkRoast.prototype = new Beverage();
HouseBland.prototype = new Beverage();
Decaf.prototype = new Beverage();
//description of drinks
function Espresso(){
	this.discription = "Espresso"
	this.coast = function(){
		return 1.99;
	}
};
function HouseBland(){
	this.discription = "HouseBland"
	this.coast = function(){
		return 0.89;
	}
};
function DarkRoast(){
	this.discription = "DarkRoast"
	this.coast = function(){
		return 2.69;
	}
};
function Decaf(){
	this.discription = "Decaf"
	this.coast = function(){
		return 0.59;
	}
};
//condiment
Mocha.prototype = new condimentDecorator();
Milk.prototype = new condimentDecorator();
Soy.prototype = new condimentDecorator();
Whip.prototype = new condimentDecorator();

function Mocha(beverage){
	this.beverage = beverage;
	this.getDiscription = function(){
		return beverage.getDiscription() + ", Mocha";
	};
	this.coast = function(){
		return 0.25 + beverage.coast();
	}
};

function Milk(beverage){
	this.beverage = beverage;
	this.getDiscription = function(){
		return beverage.getDiscription() + ", Milk";
	};
	this.coast = function(){
		return 1 + beverage.coast();
	}
};

function Soy(beverage){
	this.beverage = beverage;
	this.getDiscription = function(){
		return beverage.getDiscription() + ", Soy";
	};
	this.coast = function(){
		return 1.25 + beverage.coast();
	}
};
function Whip(beverage){
	this.beverage = beverage;
	this.getDiscription = function(){
		return beverage.getDiscription() + ", Whip";
	};
	this.coast = function(){
		return 2.25 + beverage.coast();
	}
};

//test
var esp = new Espresso();
console.log(esp.coast() + ' ' + esp.getDiscription());

var darkR = new DarkRoast();
darkR = new Mocha(darkR);
darkR = new Mocha(darkR);
darkR = new Whip(darkR);

console.log(darkR.coast() + ' ' + darkR.getDiscription());

var houseB = new HouseBland();
houseB = new Soy(houseB);
houseB = new Mocha(houseB);
houseB = new Whip(houseB);

console.log(houseB.coast() + ' ' + houseB.getDiscription());