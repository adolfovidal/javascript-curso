// Método map

const numbers = [1, 2, 3, 4, 5,];

const numbersMultpliedByTwo = numbers.map(function(number) {
    return number * 2
});

console.log(numbersMultpliedByTwo);

// Método filter

const ages = [8, 13, 27, 30, 22, 40];

const evenages = ages.filter(function(age) {
    return age % 2 == 0 // Verificação par
});

console.log(evenages);

// Método reduce

const sumOfAges = ages.reduce(function(age, accumulator) {
    return accumulator + age; // Soma de todas as idades a partir do "accumulator" (0), 0+8, 8+13, 13+27 (...)
}, 0);

console.log(sumOfAges);