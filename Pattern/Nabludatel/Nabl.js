//interfase
function Observer(){
	this.update = function(tem,press,humidity){};
}

function Display(){
	this.dispaly = function(){};
}

function Subject(){
	var obs = new Observer();
	this.registrObserver = function(obs){};
	this.removeObserver = function(obs){};
	this.notifyObserver = function(){};
}

Observer.prototype = new Display();
//class
WatherData.prototype = new Subject();
function WatherData(){
	var temperatuer;
	var presser;
	var humidity;
	var observers = [];

	this.registrObserver = function(obs){
		observers.push(obs);
	};

	this.removeObserver = function(obs){
		var index = 0;
		var newObservwers = [];
		index = observers.indexOf(obs);
		if(index >= 0){
			for(var i = 0; i < observers.length; i++){
				if(i != index){
					newObservwers.push(observers[i]);
				}
			}
			observers = newObservwers;
		}
	};

	this.notifyObserver = function(){
		for (var i = 0; i < observers.length; i++) {
		  	observers[i].update(temperatuer,presser,humidity);
		};
	};
	this.meshuerdCange = function(){
		this.notifyObserver();
	}
	this.setMesherd = function(temp,press,humi){
		temperatuer = temp;
		presser = press;
		humidity = humi;
		this.meshuerdCange();
	}


}
currentCondition.prototype = new Observer();
statisticDisplat.prototype = new Observer();

function currentCondition(WatherData){
	var temperatuer;
	var presser;
	this.watherData = WatherData;
	WatherData.registrObserver(this);
	this.update = function(tem,press,humidity){
		temperatuer = tem;
		presser = press;
		this.dispaly()
	}
	this.dispaly = function(){
		console.log('temperatuer - ' + temperatuer);
		console.log('presser - ' + presser);
	}
};

function statisticDisplat(){};



var watherData = new WatherData();
var cCondition = new currentCondition(watherData);
watherData.setMesherd(10,100,200);