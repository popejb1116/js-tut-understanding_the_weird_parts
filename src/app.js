// HOISTING *********************************************************************

// b();
// console.log(a);

// var a =  'Hello World'; // = var a;

// function b(){
//   console.log('Called b!');  
// }

// prints ->  
// Called b!
// undefined




// INVOCATION *******************************************************************
// function a() {
//   console.log('function a invoked');
//   b();
// }

// function b() {
//   console.log('function b invoked');
// }
// a();

// stack ->
// b() : Execution Context
// a() : Execution Context
// Global Execution Context
// The order of a() and b() are irrelevent b/c JS is synchronous




// EXECUTION CONTEXT AND INVOCATION *********************************************
// function b() {
//   var myVar;
// }
// function a() {
//   var myVar = 2;
//   b();
// }
// var myVar = 1;
// a();
// console.log(myVar) // 1, this is in a different execution context than the other myVar variables

// stack ->
// b() : Execution Context  myVar = undefinded
// a() : Execution Context  myVar = 2
// Global Execution Context myVar = 1





// SCOPE CHAIN ******************************************************************
function b() {
  console.log(myVar);  
}
function a() {
  let myVar = 2;
  b();
}
let myVar = 1;
a();

// Expecting 'uncaught reference error: myVar is not defined' but actually get 1. This is becasue b() makes reference to its outer environment, global in this case

