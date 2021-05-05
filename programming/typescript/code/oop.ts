


class Person {

  constructor(private name: string) {
    this.name = name
  }

}

class Employee extends Person {
  constructor(name: string, public readonly companyName: string) {
    super(name)
    this.companyName = companyName
  }
}




console.log(new Person("Lionel"))

const e = new Employee("Lonkap", "e.Voyageurs SNCF")

console.log(e.companyName)