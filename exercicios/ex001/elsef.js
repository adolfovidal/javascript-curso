// if else

const sum = 1 + 1;

if(sum === 2 ) { // três iguais (===) verifica o valor e tipo
    console.log("Sum is 2!");
} else if (sum === 3) { 
    console.log("Sum is 3!"); 
} else {
    console.log("Sum is not 2!");
}


// && (and) || (our)

const sum1 = 2+2;
const sum2 = 3+10;

if (sum1 === 4 && sum2 === 6) { // (and) dua condições precisam ser True
    console.log("Sum is 4 and sum is 6!");
}

if (sum1 === 4 || sum2 === 6) { // (our) uma condição precisa ser True
    console.log("Sum is 4 or sum is 6!");
}


// tenário
let number = sum === 2 ? 2 : 4;

if(sum === 2) {
    numer = 2;
} else {
    number = 4
}

console.log(number)

// switch

const car = 'Fiesta'

switch (car) {
    case 'Fiesta':
        console.log('Fiesta is beautifull')
        break;
    case 'Uno':
        console.log('Uno is very stronger')
        break;
    case 'Troller':
        console.log('Troller is much better!')   
        break; 
}
