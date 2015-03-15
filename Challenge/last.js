var last = function(str){
  str = str.replace(/[^\w\s]+/g, '');
  str = str.replace(/\s{2,}/, '');
  str = str.split(' ');
  var res = [];
  var word = str[0];
  for(var i = 1; i < str.length; i++){
  	if(word.length < str[i].length){
  		word = str[i];
  	}
  }
  for(var i = 0; i < str.length; i++){
  	if(word.length === str[i].length){
  		res.push(str[i]);
  	}
  }
  return res[0];
}

console.log(last('a confusing /:sentence:/[ this is not!!!!!!!~'));