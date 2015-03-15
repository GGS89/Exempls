//Pizzas
function CheesePizza(){

}

function GreekPizza(){
	
}

function PepperoniPizza(){
	
}


function simplePizzaFactory(type){
	var pizza = {};

	this.createPizza = function(type){
		if(type == 'Cheese'){
		pizza = new CheesePizza()
		}else if(type == 'Greek'){
			pizza = new GreekPizza()
		}else if(type == 'Pepperoni'){
			pizza = new PepperoniPizza()
		}
		return pizza
	}
}
//simpese
function pizzaStore(simplePizzaFactory){

	this.factory = simplePizzaFactory;

	function orderedPizzq(type){
		pizza = factory.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizzal
	}
}


function pizzaStore(){

	function createPizza(type){};

	function orderedPizzq(type){
		pizza = createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();
		return pizzal
	}
}