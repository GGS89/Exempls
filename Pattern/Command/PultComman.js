

function SamsungTv(){
	var condition = false;
	this.SamsungTvOn = function(){
		condition = true;
	};
	this.SamsungTvOff = function(){
		condition = false;
	};
	this.getCondition = function(){
		return condition;
	};
}

function LGTv(){
	var condition = false;
	this.LGTvOn = function(){
		condition = true;
	};
	this.LGTvOff = function(){
		condition = false;
	};
	this.getCondition = function(){
		return condition;
	};
}

function MusicCenter(){
	var condition = false;
	this.MusicCenterOn = function(){
		condition = true;
	};
	this.MusicCenterOff = function(){
		condition = false;
	};
	this.getConditionMusicCenter = function(){
		return condition;
	};
}


function comand(){
	this.execute = function(){};
	this.unexecute = function(){};
}

CommandSamsung.prototype = new comand();
CommandLG.prototype = new comand();


function CommandSamsung(divase){
	this.execute = function(){
		if(divase.getCondition()){
			divase.SamsungTvOff();
		}
		else{
			divase.SamsungTvOn();
		}
	}
	this.unexecute = function(){
		divase.SamsungTvOff();
	}
}

function CommandLG(divase){
	this.execute = function(){
		if(divase.getCondition()){
			divase.LGTvOn();
		}
		else{
			divase.SamsungTvOn();
		}
	}
	this.unexecute = function(){
		divase.LGTvOff();
	}
}



function pult(){
	var buttonList = {};
	this.addDivase = function(divase,button){
		if(!(this.checkButton(button))){
			buttonList[button] = divase;
		}
		else{
			console.log("Button aready busy.");
		}
	};

	this.checkButton = function(button){
		for(var key in buttonList){
			if(key == button){
				return true;
			}
		}
		return false;
	}
	this.pushButton = function(button){
			buttonList[button].execute()
	};
	this.getButtonList = function(){
		return buttonList;
	}
}

var tvSamsundDivase = new SamsungTv();
var tvLGDivase = new LGTv();

var SamsungComand = new CommandSamsung(tvSamsundDivase);
var LGComand = new CommandLG(tvLGDivase);
var pl = new pult();
pl.addDivase(SamsungComand,'1');

console.log(tvSamsundDivase.getCondition())
pl.pushButton('1');
console.log(tvSamsundDivase.getCondition())
console.log(pl.getButtonList());
console.log(tvSamsundDivase.getCondition());
pl.addDivase(LGComand,'2');
console.log(pl.getButtonList());