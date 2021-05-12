/**
 * GENERICS
 * 
 * 
 * 
 */



/**
 * Generic functions & classes
 * 
 */

// Function
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// class 

class DataStorage<T extends string | boolean | number> {
  private data:T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return this.data
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem("one")
textStorage.addItem("two")
textStorage.addItem("three")
textStorage.removeItem("two")


console.log(textStorage.getItems())

/**
 * Constraints
 * 
 */
 function constrainedMerge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// constrainedMerge( {}, 1); // Failed
// constrainedMerge( {}, {}); // It works!

interface Debuggable {
  debug: boolean
}

function log<T extends Debuggable>(config: T) {
  config.debug = false
}

// Making sure that a key exist in an object

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T, 
    key: U) {
  return obj[key]
}

/**
 * Special TS Types
 * 
 * @{see https://www.typescriptlang.org/docs/handbook/utility-types.html}
 */

// Partial type: To make all elements of an interface optional (temporarily)

interface Env {
  key: string;
  value: any;
}

type OptionalEnv = Partial<Env>

// Readonly

const names: Readonly<string[]> = ['Max', 'Anna']
//names.push('Manu') //=> not allowed to be changed

/**
 * Experiments
 * 
 */

const config: Record<string, any> = {
  "auth": {

  }
}

console.log(config)