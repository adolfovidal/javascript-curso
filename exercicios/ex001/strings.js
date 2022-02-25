// string

const firstName = 'Adolfo';
const lastName = 'Vidal';

const names = `Paula,Vanessa,Tarsila`

console.log(`Meu nome é ` + firstName + ` ` + lastName); 
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);

console.log(names.split(",")) // Cortar listas

// numbers

const number = 5;

console.log(number.toString()) // Converter para string
console.log(typeof number.toString()) // Conferir tipos


// Booleanos
false
true

console.log(2 == 2)


//null & undefined

const x = null; // variável vazia

const y = undefined; // variável indefinida


const list = [1, 2, 3,  4, 5];
const object = {name: 'Adolfo'}
