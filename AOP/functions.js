// Файл functions.js
var Interceptor = require('./interceptors.js');

function printCallInfo(callback, args) {
  var logStr = "Invoking function '" + callback.name
    + "' with args: " + args.join(', ');
 
  console.log(logStr);
}
 
function printCallResult(callback, args, result) {
  var logStr = "Function '" + callback.name
    + "' is successfully invoke\nresult: " + result + "\n";
 
  console.log(logStr);
}

var logInterceptor = new Interceptor(printCallInfo, printCallResult);


function sum(a, b) {
  return a + b;
}
sum = logInterceptor.interceptInvokes(sum);
 
function sub(a, b) {
  return a - b;
}
sub = logInterceptor.interceptInvokes(sub);
 
function mult(a, b) {
  return a * b;
}
mult = logInterceptor.interceptInvokes(mult);
 
function div(a, b) {
  return a / b;
}
div = logInterceptor.interceptInvokes(div);




sum(1, 2);
sub(3, 2);
mult(5, 4);
div(20, 4);

