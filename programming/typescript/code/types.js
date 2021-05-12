//
// TYPES
//
//const is_loggedin: boolean = true
//console.log(typeof(is_loggedin));
// number, string, boolean
// objects
// const person = {
//   name: 'Lionel',
//   age: 31
// }
// console.log(person);
// Array
// let cards: (string | number)[] // Combining types in an array "UNION" type
// cards = [1, 'X', 'A']
// Enforcing UNION types
// const config: {
//   transformers: [string, Function] // tuple type
// } = {
//   transformers: [
//     "upper", 
//     (name) => {
//       return name.toLowerCase; 
//     }
//   ]
// }
//
// TUPLE
//
// THey are fixed length array
// let tuple: [number, string] = [1, "One"];
// console.log(tuple);
//
// ENUM
//
// enum ERROR {
//   FILE_NOT_FOUND,
//   FILE_CORRUPTED,
// }
// var ERROR;
// (function (ERROR) {
//     ERROR[ERROR["FILE_NOT_FOUND"] = 0] = "FILE_NOT_FOUND";
//     ERROR[ERROR["FILE_CORRUPTED"] = 1] = "FILE_CORRUPTED";
// })(ERROR || (ERROR = {}));
//
// ----------
// Results
// ----------
// => {
// =>   '0': 'FILE_NOT_FOUND',
// =>   '1': 'FILE_CORRUPTED',
// =>   FILE_NOT_FOUND: 0,
// =>   FILE_CORRUPTED: 1
// => }
//
// ANY Type
//
// /!\ Limit the usage of this type
//
// INTERFACES
//
// enum PluginTypes {
//   source,
//   target
// }
// interface PluginOptions {
//   id: string
//   name: string
//   type: 'source' | 'target'
// }
// class DsTokenPlugin {
//   private options: PluginOptions;
//   constructor(options: PluginOptions) {
//     options = options;
//   }
//   public toString() {
//     return `Plugin ( id: $1, name: 2 )`;
//   } 
// }
// const plugin = new DsTokenPlugin({
//   id: 'PLUG-0001',
//   name: 'file',
//   type: 'source'
// });
// console.log(plugin);
//
// TYPE ALIASES
//
var currency;
(function (currency) {
    currency["EURO"] = "\u20AC";
    currency["DOLLAR"] = "$";
})(currency || (currency = {}));
// type Amount = [number, currency];
// const shoesPrice:Amount = [32, currency.EURO]
// console.log(shoesPrice);
//
// Other types
//
var userInput;
if (typeof userInput === 'string') {
    //.....
}
// You can if a type as a property with 
if ('EURO' in currency) {
    console.log("€");
}
// for classes 
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    return Bike;
}());
var v = new Car;
if (v instanceof Car) { // work for classes but not interfaces
    console.log("Car[v]: ", v);
}
function cases(v) {
    switch (v.type) {
        case 'A':
            console.log("A");
            break;
        case 'B':
            console.log("B");
            break;
    }
}
var err404 = {
    code: 'APP-E001',
    reason: 'Not found',
    resource: 'Page'
};
console.log(err404);
function add(a, b) {
    return a + b;
}
console.log(add(1, "2").split(","));
/**
 * Nullish coalescing
 */
var nullish = null; // or undefined
console.log(nullish !== null && nullish !== void 0 ? nullish : 'LOL');
