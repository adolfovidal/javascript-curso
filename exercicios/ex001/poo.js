class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);    
    }
    speak() { // Estático, não precisa instanciar classe
        console.log("Hello World");
    }
}

const person = new Person('Paula', 'Vidal', 34);
// console.log(person);

console.log(person);
person.getFullName();
person.speak();

class Animal {
    constructor(name) {
        this.name = name;

    }

    speak() {
        console.log(`${this.name} made son noise!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} barked!`)
    }
}

const animal =new Animal('Pingo');
const dog = new Dog('Pingo')

dog.speak();
animal.speak();