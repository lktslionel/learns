


class Person {

  // constructor(private readonly name: string) {
  //   this.name = name
  // }

  constructor(protected name: string) {
    this.name = name
  }

}

class Employee extends Person {

  private static instance: Employee

  get fullname() {
    return this.name
  }

  constructor(fullname: string, public readonly companyName: string) {
    super(fullname)
    this.companyName = companyName
  }

  static generateId() :string {
    return Math.random().toString(36).substring(7);
  }

  static getInstance() {
    if (! Employee.instance) {
      Employee.instance = new Employee("none", "ACME")
      return Employee.instance
    }
    
    return Employee.instance
  }
}


//
// GETTERS & SETTERS
//


// class Employee extends Person {

//   get fullname() {
//     return this.name
//   }

//   set fullname(value: string) {
//     this.fullname = name
//   }

//   constructor(fullname: string, public readonly companyName: string) {
//     super(fullname)
//     this.companyName = companyName
//   }
// }



// console.log(new Person("Lionel"))

// const e = new Employee("Lonkap", "e.Voyageurs SNCF")

// console.log(e.companyName)
// console.log(e.fullname)

// console.log(`Id: ${Employee.generateId()}`)

//
// Singleton 
//

import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";

Deno.test("Employee must support singleton pattern", () => {
  const e1 = Employee.getInstance() 
  const e2 = Employee.getInstance() 
  
  assertEquals(e1, e2);
});
