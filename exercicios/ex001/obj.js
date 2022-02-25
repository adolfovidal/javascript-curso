const person = {
    firstName: "Paula",
    lastName: "Vidal",
    age: "34",
    hobbies: ["Jogar The Sims", "Fazer Doces", "Beber Drinks"],
    dog: {
        name: "Pingo",
        age: 10,
    },
};

/*
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies;
*/

const {
    firstName: primeiroNome /* Renomear */, 
    lastName, 
    age, 
    hobbies, 
    dog: { name: dogName },
} = person; // Mesmo método de cima

const read = person.hobbies[2];

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);
// console.log(read);

// person.dog = "Pingo";
console.log(person.dog.age);
console.log(dogName);


const todos = [
    {
        id:1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id:2,
        description: "Jogar",
        isCompleted: true,
    },
    {
        id:3,
        description: "Treinar",
        isCompleted: true,
    },
];

const descriptionOfLastTodo = todos[2].description;

console.log(descriptionOfLastTodo);