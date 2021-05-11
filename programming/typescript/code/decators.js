/**
 * Decorators are functions starting with the `@` sign.
 *
 * /!\ Decorator executes when the target is defined. You don't have to instantiate anything
 *
 *
 * Decorators are executed botton-up
 *
 * ```
 * @Decorator2' - applied 2nd
 * @Decorator1' - applied 1st
 * class Decorated { ... }
 *
 * ```
 *
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *
 * Method decorator
 *
 * /!\ you can use the return value, like for property decorator
 *
 */
function cli(_a) {
    var type = _a.type, message = _a.message;
    console.log("Applying App decorator of type: " + type);
    return function (target, propertyKey, descriptor) {
        console.log("target:", target);
        console.log("propertyKey:", propertyKey);
        console.log("descriptor:", descriptor.value);
        var originalMethod = descriptor.value;
        descriptor.value = function (args) {
            console.log("@injected value:" + message);
            originalMethod.apply(this, args);
            console.log("Hacked!");
        };
    };
}
function Authenticated(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.auth = function () {
            console.log("Authenticated!");
        };
        return class_1;
    }(constructor));
}
// @Auth
var Todo = /** @class */ (function () {
    function Todo() {
    }
    // @cli({
    //   type: "w:app:cli",
    //   message: "♥️"
    // })
    Todo.prototype.todo = function (name) {
        if (name === void 0) { name = "todo-app"; }
        console.log("===== App=====");
    };
    return Todo;
}());
var app = new Todo();
// app.auth()  // Will failed : Property 'auth' does not exist on type 'Todo'. Decorator are experimental for now. You must use regular function instead
var AuthenticatedApp = Authenticated(Todo);
var newApp = new AuthenticatedApp;
newApp.auth();
console.log("app.constructor.name: " + app.constructor.name); //To get the name of the class
/**
 * Property decorators
 *
 * function decorator(constructor: any, propertyName: string | Symbol ) {...}
 *
 * you can use `target.constructor` to access the class
 */
// class Test {
//   @decorator
//   name: string = "test" 
// }
/**
 * Accessor decorators
 *
 * function access(constructor: any, propertyName: string | Symbol, descriptor: propertyDescriptor ) {...}
 *
 *
 */
// class Test {
//   @access
//   set name(value: string) {...}
// }
/**
 * Parameter decorators
 *
 * function uniq(constructor: any, methodName: string | Symbol, position: number ) {...}
 *
 *
 */
// class Test {
//   
//   getPrice( @uniq price: number) {...}
// }
