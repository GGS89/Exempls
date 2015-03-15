var q = require('q');
var fs = require('fs');

function recursive(element, callback){
	fs.open('data.json','r',function(err,file){
		var buff = new Buffer(1000);
		fs.read(file, buff, 0, 10, 1,  function(err,num){
			var data = buff.toString('utf-8', 0, num);
			fs.close(file, function(){
				var res = {element : element * 10, data : JSON.parse(data).test};
				callback(res);
			});
		});
	});
}

function termDefn(resp, array){
	var deferred = q.defer();
	recursive(array[0], function(res){
		resp.push(res);
		if(array.length !== 1){
			array.shift();
			deferred.resolve(termDefn(resp, array))
		}
		else{
			deferred.resolve(resp);
		}
	});
	return deferred.promise;
}

function basicFact(){
	var deferred = q.defer();
	setTimeout(function(){
		deferred.resolve('test 2');
	},1000)
	return deferred.promise;
}


function getAll(){
	var res = [];
	var num = 5193;
	var testArray = [];
	for(var i = 0; i < num; i++){
		testArray.push(i);
	}
	q.all([termDefn(res, testArray), basicFact()]).then(function(response) {
		console.log(response);
	})
}

getAll()