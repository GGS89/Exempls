// Файл interceptor.js
var Interceptor = (function(){
	function emptyFunction() {};
	 
	function Interceptor(preInvoke, postInvoke) {
	  /*
	   * Если preInvoke не функция, то заменяем этот аргумент
	   * на пустую функцию. Вдруг нам не нужно будет ничего делать
	   * до перехватываемого вызова.
	   */
	  var preInvoke = typeof preInvoke === 'function' ? preInvoke : emptyFunction,
	 
	    // Аналогично с postInvoke
	    postInvoke = typeof postInvoke === 'function' ? postInvoke : emptyFunction;
	 
	  this.preInvoke = preInvoke;
	  this.postInvoke = postInvoke;
	}

	Interceptor.prototype = {
	  constructor: Interceptor,
	  interceptInvokes: function (callback) {
	    /*
	     * Запоминаем текущий контекст, так как в
	     * в следующей анонимной функции, но уже другой
	     */
	    var self = this;
	    return function () { // преобразованная функция
	      // конвертируем arguments в массив
	      var args = Array.prototype.slice.call(arguments, 0),
	        /*
	         * Массив с аргументами для preInvoke и postInvoke.
	         * Добавим в него в качестве первого элемента функцию,
	         * вызов которой перехватывается. Вдруг нам понадобится дополнительная информация о ней.
	         */
	        result;        
	 
	      // Делаем что-то до перехватываемого вызова
	      self.preInvoke.call(self, callback, args); 
	      result = callback.apply(self, args);
	      // Делаем что-то после
	      self.postInvoke.call(self, callback, args, result);
	 
	      return result;
	    };
	  }
	}

	return Interceptor;
})();

module.exports = Interceptor;