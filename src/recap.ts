const myAge = 12;
const myName = 'Sebastian';

console.log(myAge, myName);

const suma = (a: number, b: number) => {
  return a + b;
};

suma(2, 5);

// Clases
class Person {
  // private age;
  // private name;

  // constructor(age: number, name: string) {
  //   this.age = age;
  //   this.name = name;
  // }

  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name}, I am ${this.age} years old`;
  }
}

const sebas = new Person(15, 'Sebastian');
sebas.getSummary();
