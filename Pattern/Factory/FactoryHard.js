function Pizza(){
	this.name = '';
	this.dough = '';
	this.sause = '';
	this.toppings = [];

	this.prepare = function(){
		var toppings = '';
		console.log('Prepearing ' + this.name);
		console.log('Tossing dough ...');
		console.log('Adding sause ' + this.sause);
		for (var i = 0; i < this.toppings.length; i++) {
			toppings += this.toppings[i];
		};
		console.log('Adding toppings : ' + toppings);;
	};
	this.bake = function(){
		console.log('Bake for 25 minets at 350');
	};
	this.cut = function(){
		console.log('Cutting pizza into diagonal slices');
	};
	this.box = function(){
		console.log('Place pizza in official Pizzabox box');
	};
	this.getName = function(){
		return this.name;
	}

}

//Pizzas
NYStyleCheesePizza.prototype = new Pizza()
ChicagoStyleCheesePizza.prototype = new Pizza();

function NYStyleCheesePizza(){
	this.name = 'NY Style Souse and Cheese Pizza';
	this.dough = 'Thin Crust dough';
	this.sause = 'Marinary souse';
	this.toppings.push('Grated Reggiano Cheese');
}

function ChicagoStyleCheesePizza(){
	this.name = 'Chicago Style deep dish Cheese Pizza';
	this.dough = 'Extra Thin Crust dough';
	this.sause = 'Plum Tomato souse';
	this.toppings.push('Shredded Mazzarella Cheese');

	this.cut = function(){
		console.log('Cutting the pizza into square slices');
	}
	
}

function PepperoniPizza(){
	
}





function pizzaStore(){

	this.createPizza = function(type){};

	this.orderedPizza = function(type){
		pizza = this.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizza
	}
}

NYpizzaStore.prototype = new pizzaStore();
ChicagoPizzaStore.prototype = new  pizzaStore();
CaliforniaPizzaStore.prototype = new pizzaStore();

function NYpizzaStore(){
	this.createPizza = function(item){
		if(item == 'Cheese'){
		pizza = new NYStyleCheesePizza()
		}else if(item == 'Greek'){
			pizza = new NYStyleGreekPizza()
		}else if(item == 'Pepperoni'){
			pizza = new NYStylePepperoniPizza()
		}
		return pizza
	}
}

function ChicagoPizzaStore(){
	this.createPizza = function(item){
		if(item == 'Cheese'){
		pizza = new ChicagoStyleCheesePizza()
		}else if(item == 'Greek'){
			pizza = new ChicagoStyleGreekPizza()
		}else if(item == 'Pepperoni'){
			pizza = new ChicagoStylePepperoniPizza()
		}
		return pizza
	}
}

function CaliforniaPizzaStore(){
	this.createPizza = function(item){
		if(item == 'Cheese'){
		pizza = new CaliforniaStyleCheesePizza()
		}else if(item == 'Greek'){
			pizza = new CaliforniaStyleGreekPizza()
		}else if(item == 'Pepperoni'){
			pizza = new CaliforniaStylePepperoniPizza()
		}
		return pizza
	}
}

NYpizzaIngredient.prototype = new pizzaIngredient();
chicagoPizzaIngredient.prototype = new pizzaIngredient();

function NYpizzaIngredient(){
	this.createDough = function(){
		return new ThinCrusDough();
	};
	this.createSause = function(){
		return
	};
	this.createCheese = function(){
		return
	};
	this.createVeggies = function(){
		return
	};
	this.createPepperoni = function(){
		return
	};
	this.createClams = function(){
		return
	};
}

function chicagoPizzaIngredient(){
	
}

var nyPizzaStore = new NYpizzaStore();
var chicagoPizzaStore = new ChicagoPizzaStore();

pizza = nyPizzaStore.orderedPizza('Cheese');
console.log('Ethan ordered a pizza ' + pizza.getName());

pizza = chicagoPizzaStore.orderedPizza('Cheese');
console.log('Joel ordered a pizza ' + pizza.getName());

//ingredient

function pizzaIngredient(){
	this.createDough = function(){};
	this.createSause = function(){};
	this.createCheese = function(){};
	this.createVeggies = function(){};
	this.createPepperoni = function(){};
	this.createClams = function(){};
}

