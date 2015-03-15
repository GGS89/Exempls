function printCallInfo(callback, args) {
	var logStr = "Invoking function '" + callback.name
		+ "' with args: " + args.join(', ');

	console.log(logStr);
}

function printCallResult(callback, args, result) {
	var logStr = "Function '" + callback.name
	+ "' is successfully invoke\nresult: " + result;

	console.log(logStr);
}

var logInterceptor = new Interceptor(printCallInfo, printCallResult);

var convertToNumberInterceptor = new Interceptor(function (callback, args) {
	for (var i = 0; i < args.length; i++) {
		args[i] = parseFloat(args[i]);
	}
});

var checkArgsInterceptor = new Interceptor(function (callback, args) {
	for (var i = 0; i < args.length; i++) {
		if (typeof args[i] !== 'number') {
			throw new Error("Argument with index " + i + " is not a number");
		}
	}
});