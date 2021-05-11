"use strict";
//
// FUNCTIONS
//
// let doNothing: Function;
// doNothing = () : void =>  {
//   console.log("doingNothing...");
// }
// doNothing();
//
// Function type
//
// let add: (a:number, b:number) => number;
// add = (a, b) => a + b;
// console.log(add (12,11));
//
// Never return value: it is usually used for function that never produce a value
// 
// Like function that throw an error
function err(_code, _reason) {
    throw { errCode: _code, reason: _reason };
}
err(404, "Not found");
