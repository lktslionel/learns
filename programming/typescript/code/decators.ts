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
 * Can be used as validators. {@See https://github.com/typestack/class-validator}
 * 
 */

interface DecoratorOptions {
  type: string;
  message: string;
}

/**
 * 
 * Method decorator
 * 
 * /!\ you can use the return value, like for property decorator
 * 
 */

function cli({ type, message }: DecoratorOptions) {
  console.log("Applying App decorator of type: "+ type)
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("target:", target)
    console.log("propertyKey:", propertyKey)
    console.log("descriptor:", descriptor.value)
    
    const originalMethod = descriptor.value as Function
    descriptor.value = function(args:any) {
      console.log("@injected value:" + message)
      originalMethod.apply(this, args)
      console.log("Hacked!")
    }
  }
}

function Authenticated<T extends { new (...args: any[]): { /* prop: type */} }>(constructor: T) {
  return class extends constructor {
    auth(): void {
      console.log("Authenticated!")
    }
  }
}

// @Auth
class Todo {

  // @cli({
  //   type: "w:app:cli",
  //   message: "♥️"
  // })
  todo(name="todo-app") {
    console.log("===== App=====");
  }

}


const app = new Todo()
// app.auth()  // Will failed : Property 'auth' does not exist on type 'Todo'. Decorator are experimental for now. You must use regular function instead
let AuthenticatedApp = Authenticated(Todo)
const newApp = new AuthenticatedApp
newApp.auth()


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
  